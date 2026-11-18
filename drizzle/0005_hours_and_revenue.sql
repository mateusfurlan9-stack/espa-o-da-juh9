CREATE TABLE schedule_entries_hours (id TEXT PRIMARY KEY NOT NULL, date TEXT NOT NULL, start INTEGER NOT NULL, end INTEGER NOT NULL, kind TEXT NOT NULL DEFAULT 'block', note TEXT NOT NULL DEFAULT '', client TEXT NOT NULL DEFAULT '', active INTEGER NOT NULL DEFAULT 1, created_at TEXT NOT NULL, status TEXT NOT NULL DEFAULT 'confirmed', services TEXT NOT NULL DEFAULT '[]', total INTEGER NOT NULL DEFAULT 0, client_phone TEXT NOT NULL DEFAULT '', CHECK (start >= 540 AND start <= 1140 AND start < end), CHECK (kind IN ('block','appointment')));
--> statement-breakpoint
INSERT INTO schedule_entries_hours (id,date,start,end,kind,note,client,active,created_at,status,services,total,client_phone) SELECT id,date,start,end,kind,note,client,active,created_at,status,services,total,client_phone FROM schedule_entries;
--> statement-breakpoint
DROP TABLE schedule_entries;
--> statement-breakpoint
ALTER TABLE schedule_entries_hours RENAME TO schedule_entries;
--> statement-breakpoint
CREATE INDEX schedule_date_active ON schedule_entries(date,active);
--> statement-breakpoint
CREATE INDEX schedule_client_phone ON schedule_entries(client_phone);
--> statement-breakpoint
CREATE TABLE extra_openings (date TEXT NOT NULL, start INTEGER NOT NULL CHECK (start IN (1080,1140)), enabled INTEGER NOT NULL DEFAULT 0 CHECK (enabled IN (0,1)), PRIMARY KEY (date,start));
--> statement-breakpoint
CREATE TABLE payments (id TEXT PRIMARY KEY NOT NULL, entry_id TEXT NOT NULL, amount INTEGER NOT NULL CHECK (amount != 0 AND amount BETWEEN -100000000 AND 100000000), kind TEXT NOT NULL CHECK (kind IN ('deposit','balance','refund')), paid_on TEXT NOT NULL, created_at TEXT NOT NULL, CHECK ((kind='refund' AND amount<0) OR (kind!='refund' AND amount>0)));
--> statement-breakpoint
CREATE INDEX payments_entry ON payments(entry_id);
--> statement-breakpoint
CREATE INDEX payments_date ON payments(paid_on);
