CREATE TABLE schedule_entries_next (id TEXT PRIMARY KEY NOT NULL, date TEXT NOT NULL, start INTEGER NOT NULL, end INTEGER NOT NULL, kind TEXT NOT NULL DEFAULT 'block', note TEXT NOT NULL DEFAULT '', client TEXT NOT NULL DEFAULT '', active INTEGER NOT NULL DEFAULT 1, created_at TEXT NOT NULL, status TEXT NOT NULL DEFAULT 'confirmed', services TEXT NOT NULL DEFAULT '[]', total INTEGER NOT NULL DEFAULT 0, CHECK (start >= 540 AND start <= 1020 AND start < end), CHECK (kind IN ('block','appointment')));
--> statement-breakpoint
INSERT INTO schedule_entries_next (id,date,start,end,kind,note,client,active,created_at,status,services,total) SELECT id,date,start,CASE WHEN kind='block' AND start=540 AND end=1020 THEN 1035 ELSE end END,kind,note,client,active,created_at,status,services,total FROM schedule_entries;
--> statement-breakpoint
DROP TABLE schedule_entries;
--> statement-breakpoint
ALTER TABLE schedule_entries_next RENAME TO schedule_entries;
--> statement-breakpoint
CREATE INDEX schedule_date_active ON schedule_entries(date, active);
