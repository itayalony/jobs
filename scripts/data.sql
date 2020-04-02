INSERT INTO jobs.users(upn, display_name) VALUES 
    ('s8182384', 'מיכאל הופמן'),
    ('s8258065', 'דניאל דימנשטיין'),
    ('s8222765', 'אדיר סטיון');

INSERT INTO jobs.tags(name, color) VALUES 
    ('TL', '#00B0F0'),
    ('PO', '#FFC000' ),
    ('DEV','#7030A0'),
    ('PM', '#FF0066');

INSERT INTO jobs.roles(name) VALUES 
    ('תוכניתן'),
    ('רש"ץ'),
    ('מנהל מוצר');

INSERT INTO jobs.standards(name) VALUES 
    ('סרן'),
    ('רס"ן'),
    ('רס"ל');

INSERT INTO jobs.units(name) VALUES
    ('מצפ"ן'),
    ('ממר"ם'),
    ('שחר');

INSERT INTO jobs.branches(unit_id, name) VALUES
    (1, 'פסגות שילוביות'),
    (1, 'אבן מתגלגלת'),
    (1, 'סיגמא'),
    (2, 'ענן מבצעי'),
    (2, 'מרחב התומכ"ל'),
    (3, 'שכר');

INSERT INTO jobs.departments(branch_id, name) VALUES
    (1, 'DEVOPS'),
    (1, 'הנדסת השילוביות'),
    (1, 'קישוריות ואש'),
    (1, 'ספקטרום'),
    (1, 'ל"א'),
    (2, 'אבן החכמים'),
    (2, 'גלובוס'),
    (2, 'מעברים'),
    (4, 'Platforms'),
    (4, 'Big Data'),
    (4, 'Cto'),
    (5, 'מימ"ד'),
    (5, 'רשתות'),
    (6, 'תומכי החלוה'),
    (6, 'שכר קבע');

INSERT INTO jobs.base_locations(name) VALUES
    ('של"ר'),
    ('צריפין'),
    ('קריה');
    
INSERT INTO jobs.advertisements(role_id, unit_id, branch_id, department_id, job_name,description, entry_date, seniority, is_damach, advertiser_upn, contact, base_location_id) VALUES
	(1, 1, 1, 1,'מנהל מוצר מעגל האש', 'מנהל מוצר האש, אחראי על כלל ייצוג תהליך מעגל האש במערכת ועבודה רב"ז.', '2020-09-01', 2, true, 's8182384', 'פלאפון 0527777780', 1),
	(3, 1, 2, 6, 'דרוש מפתח תותח','מפתח לצוות התכנון של מערכת שו"ב ל"א, פיתוח אלגוריתמי אפקטיביות חסימה למערך הל"א', '2020-08-01', 3, true, 's8182384', 'פלאפון 0527732470', 1),
	(2, 2, 5, 13, 'מנהל מוצר מעגל','מנהל מוצר האש, אחראי על כלל ייצוג תהליך מעגל האש במערכת ועבודה רב"ז.', '2021-4-01', 2, true, 's8258065', 'פלאפון 0527732470', 1),
	(2, 2, 4, 10, 'רש"צ חציל', 'ראש צוות מיראז ומציאויות, הצוותים הכי טובים ביחידה BY FAR כדאי לכם להגיע!', '2020-10-01', 2, true, 's8222765', 'פלאפון 0522234560', 2),
	(2, 2, 4, 11, 'מנהל מוצר מבצעים', 'מנהל מוצר המבצעים, עוד מוצר שהשיקו במדור עוצמה ועדיין לא מכירה ממש.', '2021-01-01', 2, true, 's8182384', 'פלאפון 0522234560', 2),
	(3, 3, 6, 14, 'מנהלת מוצר מעגל','מנהל מוצר האש, אחראי על כלל ייצוג תהליך מעגל האש במערכת ועבודה רב"ז.', '2020-11-01', 2, true, 's8258065', 'פלאפון 0522234560', 3),
	(3, 3, 6, 15, 'מנהל מוצר הערכת הישג','מנהל מוצר הערכת הישג, אחראי על תהליך הערכת ההישג הצה"לי ובפרט המטכ"לי.', '2020-5-01', 2, true, 's8222765', 'פלאפון 0528423430', 3);


INSERT INTO jobs.standards_of_ads(standard_id, advertisement_id) VALUES
	(1, 1),
	(2, 1),
	(1, 2),
	(3, 3),
	(2, 4),
	(2, 5),
	(3, 5),
	(2, 6),
	(3, 7);

INSERT INTO jobs.tags_of_ads(tag_id, advertisement_id) VALUES
	(4, 1),
	(2, 2),
	(4, 3),
	(1, 4),
	(2, 5),
	(1, 6),
	(2, 7);

INSERT INTO  jobs.favorite_ads_of_users(upn, advertisement_id) VALUES
    ('s8182384', 1),
    ('s8182384', 3),
    ('s8182384', 5),
    ('s8258065', 2),
    ('s8258065', 3),
    ('s8258065', 5),
    ('s8222765', 4),
    ('s8222765', 5),
    ('s8222765', 3);