ALTER TABLE schedule_entries ADD COLUMN client_phone TEXT NOT NULL DEFAULT '';
--> statement-breakpoint
CREATE TABLE customer_blocks (
  phone TEXT PRIMARY KEY NOT NULL,
  blocked INTEGER NOT NULL DEFAULT 0 CHECK (blocked IN (0,1)),
  updated_at TEXT NOT NULL
);
--> statement-breakpoint
CREATE INDEX schedule_client_phone ON schedule_entries(client_phone);
