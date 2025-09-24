import "server-only";
import { pool } from "@/lib/db";

export async function findUserByEmail(email: string) {
  const { rows } = await pool.query(
    `SELECT id, email, password_hash, name
    FROM users
    WHERE email = $1`,
    [email]
  );
  return rows[0] ?? null;
}

export async function createUser(email: string, passwordHash: string, name?: string) {
  const { rows } = await pool.query(
    `INSERT INTO users (email, password_hash, name)
     VALUES ($1, $2, $3)
     RETURNING id, email, name`,
    [email, passwordHash, name ?? null]
  );
  return rows[0];
}
