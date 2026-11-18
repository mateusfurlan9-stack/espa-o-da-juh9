-- Release the five existing pending example requests; retain their history.
UPDATE schedule_entries SET active=0 WHERE active=1 AND kind='appointment' AND status='pending' AND id IN ('02f96531-08da-40d7-8478-d2e64f6eee18','087e11ab-4ea7-4506-a6b0-b1cf11a80415','6c33e7a0-a8af-401c-a152-40fe69c6ce03','77113e93-75f7-4219-8ed0-e43214446bdc','90429769-0670-4806-9e89-951c90421c29');
