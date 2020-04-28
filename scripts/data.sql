INSERT INTO jobs.users(phone_number, upn, display_name) VALUES 
    ('0542556850', 's8182384', 'מיכאל הופמן'),
    ('0538659922', 'michael-hoffman-26', 'michael-hoffman-26'),
    ('0558653277', 's8258065', 'דניאל דימנשטיין'),
    ('0584323455', 's8222765', 'אדיר סטיון'),
    ('0557567352', 'SteveVaknin', 'סטיב וקנין');

INSERT INTO jobs.roles(name, initials, color) VALUES 
    ('תוכניתן', 'DEV', '#7030A0'),
    ('רש"צ', 'TL', '#00B0F0'),
    ('מנהל מוצר', 'PM', '#FF0066'),
    ('קצין פרויקט', 'PO', '#FFC000');

INSERT INTO jobs.standards(name) VALUES 
    ('סרן'),
    ('רס"ן'),
    ('רס"ל');

INSERT INTO jobs.units(name) VALUES
    ('מצפ"ן'),
    ('ממר"ם'),
    ('שחר');

INSERT INTO jobs.branches(unit_id, name) VALUES
    (1, 'פסגות ושילוביות'),
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
    
INSERT INTO jobs.advertisements(role_id, unit_id, branch_id, department_id, job_title,
                                job_description, entry_date, seniority, is_damach, 
                                advertiser_upn, contact, base_location_id, is_close) VALUES
	(3, 1, 1, 1,'מנהל מוצר מעגל האש', 'מנהל מוצר האש, אחראי על כלל ייצוג תהליך מעגל האש במערכת ועבודה רב"ז.', '09/20', 2, true, 'michael-hoffman-26', 'פלאפון 0527777780', 1, false),
	(1, 1, 2, 6, 'דרוש מפתח תותח','מפתח לצוות התכנון של מערכת שו"ב ל"א, פיתוח אלגוריתמי אפקטיביות חסימה למערך הל"א', '08/20', 3, true, 'michael-hoffman-26', 'פלאפון 0527732470', 1, true),
	(3, 2, 5, 13, 'מנהל מוצר מעגל','מנהל מוצר האש, אחראי על כלל ייצוג תהליך מעגל האש במערכת ועבודה רב"ז.', '04/20', 2, true, 's8258065', 'פלאפון 0527732470', 1, false),
	(2, 2, 4, 10, 'רש"צ חציל', 'ראש צוות מיראז ומציאויות, הצוותים הכי טובים ביחידה BY FAR כדאי לכם להגיע!', '10/20', 2, true, 's8222765', 'פלאפון 0522234560', 2, false),
	(3, 2, 4, 11, 'מנהל מוצר מבצעים', 'מנהל מוצר המבצעים, עוד מוצר שהשיקו במדור עוצמה ועדיין לא מכירה ממש.', '01/21', 2, true, 'michael-hoffman-26', 'פלאפון 0522234560', 2, false),
	(3, 3, 6, 14, 'מנהלת מוצר מעגל','מנהל מוצר האש, אחראי על כלל ייצוג תהליך מעגל האש במערכת ועבודה רב"ז.', '11/20', 2, true, 's8258065', 'פלאפון 0522234560', 3, false),
	(3, 3, 6, 15, 'מנהל מוצר הערכת הישג','מנהל מוצר הערכת הישג, אחראי על תהליך הערכת ההישג הצה"לי ובפרט המטכ"לי.', '05/20', 2, true, 's8222765', 'פלאפון 0528423430', 3, false);

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

INSERT INTO  jobs.favorite_ads_of_users(upn, advertisement_id) VALUES
    ('s8182384', 1),
    ('s8182384', 2),
    ('s8182384', 6),
    ('s8258065', 2),
    ('s8258065', 3),
    ('s8258065', 5),
    ('s8222765', 1),
    ('s8222765', 5),
    ('s8222765', 3),
    ('SteveVaknin', 1),
    ('SteveVaknin', 2),
    ('SteveVaknin', 3);


-- users.upn, users.display_name, users.phone_number

-- //maybe 
-- SELECT ads.id, job_title, is_close, roles.*,
-- 	array_agg('upn: ' || users.upn || ', name: ' ||  users.display_name || ', phone: ' || 
--    (CASE WHEN users.phone_number IS null THEN '""' ELSE users.phone_number END)) as candidates
-- 	FROM jobs.advertisements ads
-- 	JOIN jobs.roles roles ON ads.role_id=roles.id
-- 	LEFT JOIN jobs.favorite_ads_of_users favorite ON favorite.advertisement_id=ads.id
-- 	LEFT JOIN jobs.users users ON users.upn=favorite.upn
-- 	WHERE ads.advertiser_upn='michael-hoffman-26'
-- 	GROUP BY ads.id, job_title, is_close, roles.id, roles.name, roles.color, roles.initials;

-- SELECT ads.id, job_title, is_close, 
-- 	json_build_object(
-- 		'id', roles.id,
-- 		'name', roles.name,
-- 		'color', roles.color,
-- 		'initials', roles.initials) as role
-- 	,json_agg(json_build_object(
-- 		'upn', users.upn,
-- 		'name', users.display_name,
-- 		'phoneNumber', 
--    		(CASE WHEN users.phone_number IS null THEN '' ELSE users.phone_number END))) as candidates
-- FROM jobs.advertisements ads
-- JOIN jobs.roles roles ON ads.role_id=roles.id
-- LEFT JOIN jobs.favorite_ads_of_users favorite ON favorite.advertisement_id=ads.id
-- LEFT JOIN jobs.users users ON users.upn=favorite.upn
-- WHERE ads.advertiser_upn='michael-hoffman-26'
-- GROUP BY ads.id, job_title, is_close, roles.id, roles.name, roles.color, roles.initials;