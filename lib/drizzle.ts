import {
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { InferModel } from "drizzle-orm";
import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";

export const UsersTable = pgTable(
  "users",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    image: text("image").notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
  },
  (users) => {
    return {
      uniqueIdx: uniqueIndex("unique_idx").on(users.email),
    };
  }
);

export type User = InferModel<typeof UsersTable>;
export type NewUser = InferModel<typeof UsersTable, "insert">;

// Connect to Vercel Postgres
export const db = drizzle(sql);

// model Room {
//     id String @id @default(cuid()) @unique
//     createdAt DateTime @default(now())
//     userId String
//     roomName String
//     storyName String
//     visible Boolean
//     votes Vote[]
//     scale String
//     logs Log[]
//     owner User @relation(fields: [userId], references: [id], onDelete: Cascade)

//     @@index([userId])
//   }

//   model Vote {
//     id String @id @default(cuid()) @unique
//     createdAt DateTime @default(now())
//     userId String
//     roomId String
//     value String
//     owner User @relation(fields: [userId], references: [id], onDelete: Cascade)
//     room Room @relation(fields: [roomId], references: [id], onDelete: Cascade)
//     @@unique([userId, roomId])
//   }

//   model Log {
//     id String @id @default(cuid()) @unique
//     createdAt DateTime @default(now())
//     userId String
//     roomId String
//     scale String
//     votes Json
//     roomName String
//     storyName String
//     owner User @relation(fields: [userId], references: [id], onDelete: Cascade)
//     room Room @relation(fields: [roomId], references: [id], onDelete: Cascade)
//   }
