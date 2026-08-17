Elevates OS
Role → Menu → Route Map

This document lists every demo login persona (as shown on the /login screen's Persona dropdown), the role key each maps to, and the full navigation tree for that role — every menu group, every option in it, and every route (including nested detail/sub-routes) that option leads to. Routes verified live: build passed with 0 errors, all listed routes returned HTTP 200 with real seeded demo data.

Source: Elevates-os-main (Next.js 15, demo-mode store)
Total login personas: 8
Distinct role keys among them: 6 (founder, hq_admin, faculty_coordinator, chairman, secretary, class_representative, student — note class_representative appears twice)

1. Founder (HQ)

Role key: founder
Demo account id: u-founder
Lands on login: /hq
Note: Super-admin. Only Founder & HQ Admin see the "Users" item under Network.
 

Menu Group
Option
Route
Sub-route (if any)
Overview
Home
/hq
—
 
Analytics
/hq/analytics
—
 
Calendar
/hq/calendar
—
Network
Chapters
/hq/chapters
—
 
Users
/hq/users
—
 
Leadership
/hq/leadership
—
 
Roles
/hq/permissions
—
 
Reports
/hq/reports
Report detail → /hq/reports/[reportId]
Library
Resources
/hq/resources
—
 
Brand
/hq/brand
—
 
Guidelines
/hq/guidelines
Guideline detail → /hq/guidelines/[id]
 
Playbook
/hq/playbook
—
More
Alerts
/hq/notifications
—
 
Settings
/hq/settings
—
 
Audit
/hq/audit
—
 
Leaderboards
/leaderboards
—
 
Demo loops
/workflows
—
 
Design system
/design-system
—

2. HQ Admin

Role key: hq_admin
Demo account id: u-hq-admin
Lands on login: /hq
Note: Super-admin. Identical menu to Founder, including "Users".
 

Menu Group
Option
Route
Sub-route (if any)
Overview
Home
/hq
—
 
Analytics
/hq/analytics
—
 
Calendar
/hq/calendar
—
Network
Chapters
/hq/chapters
—
 
Users
/hq/users
—
 
Leadership
/hq/leadership
—
 
Roles
/hq/permissions
—
 
Reports
/hq/reports
Report detail → /hq/reports/[reportId]
Library
Resources
/hq/resources
—
 
Brand
/hq/brand
—
 
Guidelines
/hq/guidelines
Guideline detail → /hq/guidelines/[id]
 
Playbook
/hq/playbook
—
More
Alerts
/hq/notifications
—
 
Settings
/hq/settings
—
 
Audit
/hq/audit
—
 
Leaderboards
/leaderboards
—
 
Demo loops
/workflows
—
 
Design system
/design-system
—

3. Faculty liaison · EKC

Role key: faculty_coordinator
Demo account id: u-faculty
Lands on login: /faculty
Note: Scoped to EKC chapter. Reviews/approves events & reports, monitors students.
 

Menu Group
Option
Route
Sub-route (if any)
Faculty
Home
/faculty
—
 
Chapter
/chapter/[slug]
—
 
Calendar
/chapter/[slug]/calendar
—
 
Events
/chapter/[slug]/events
Event detail → /chapter/[slug]/events/[eventId]
 
Students
/chapter/[slug]/students
—
 
Analytics
/chapter/[slug]/analytics
—
 
Reports
/chapter/[slug]/reports
Report detail → /chapter/[slug]/reports/[reportId]
 
Forms
/chapter/[slug]/forms
Form detail → /chapter/[slug]/forms/[formId]
 
 
 
Form fill → /chapter/[slug]/forms/[formId]/fill
 
Classes
/chapter/[slug]/classes
—
More
Alerts
/notifications
—
 
Leaderboards
/leaderboards
—
 
Playbook
/eos
—

4. Campus Lead · EKC

Role key: chairman
Demo account id: u-chairman
Lands on login: /executive
Note: Full Executive menu — chapter operations, programs, people & ops.
 

Menu Group
Option
Route
Sub-route (if any)
Home
Desk
/executive
—
 
Chapter
/chapter/[slug]
—
 
Analytics
/chapter/[slug]/analytics
—
Programs
Calendar
/chapter/[slug]/calendar
—
 
Events
/chapter/[slug]/events
Event detail → /chapter/[slug]/events/[eventId]
 
Forms
/chapter/[slug]/forms
Form detail → /chapter/[slug]/forms/[formId]
 
 
 
Form fill → /chapter/[slug]/forms/[formId]/fill
 
Attendance
/chapter/[slug]/attendance
—
 
Clusters
/chapter/[slug]/clusters
Cluster detail → /chapter/[slug]/clusters/[clusterId]
 
Projects
/chapter/[slug]/projects
—
 
Classes
/chapter/[slug]/classes
—
People & Ops
Community
/chapter/[slug]/community
—
 
Students
/chapter/[slug]/students
—
 
Leadership
/chapter/[slug]/leadership
—
 
Tasks
/chapter/[slug]/tasks
—
 
Announcements
/chapter/[slug]/announcements
—
 
Reports
/chapter/[slug]/reports
Report detail → /chapter/[slug]/reports/[reportId]
 
Settings
/chapter/[slug]/settings
—
 
Resources
/chapter/[slug]/resources
—
More
Alerts
/notifications
—
 
Leaderboards
/leaderboards
—
 
Playbook
/eos
—

5. Secretary · EKC

Role key: secretary
Demo account id: u-secretary
Lands on login: /executive
Note: Same Executive menu shape as Chairman; permissions differ, routes do not.
 

Menu Group
Option
Route
Sub-route (if any)
Home
Desk
/executive
—
 
Chapter
/chapter/[slug]
—
 
Analytics
/chapter/[slug]/analytics
—
Programs
Calendar
/chapter/[slug]/calendar
—
 
Events
/chapter/[slug]/events
Event detail → /chapter/[slug]/events/[eventId]
 
Forms
/chapter/[slug]/forms
Form detail → /chapter/[slug]/forms/[formId]
 
 
 
Form fill → /chapter/[slug]/forms/[formId]/fill
 
Attendance
/chapter/[slug]/attendance
—
 
Clusters
/chapter/[slug]/clusters
Cluster detail → /chapter/[slug]/clusters/[clusterId]
 
Projects
/chapter/[slug]/projects
—
 
Classes
/chapter/[slug]/classes
—
People & Ops
Community
/chapter/[slug]/community
—
 
Students
/chapter/[slug]/students
—
 
Leadership
/chapter/[slug]/leadership
—
 
Tasks
/chapter/[slug]/tasks
—
 
Announcements
/chapter/[slug]/announcements
—
 
Reports
/chapter/[slug]/reports
Report detail → /chapter/[slug]/reports/[reportId]
 
Settings
/chapter/[slug]/settings
—
 
Resources
/chapter/[slug]/resources
—
More
Alerts
/notifications
—
 
Leaderboards
/leaderboards
—
 
Playbook
/eos
—

6. Class Rep · CSE Girl

Role key: class_representative
Demo account id: u-cr
Lands on login: /executive
Note: Executive-shaped menu (class_representative role), scoped narrower by permissions only.
 

Menu Group
Option
Route
Sub-route (if any)
Home
Desk
/executive
—
 
Chapter
/chapter/[slug]
—
 
Analytics
/chapter/[slug]/analytics
—
Programs
Calendar
/chapter/[slug]/calendar
—
 
Events
/chapter/[slug]/events
Event detail → /chapter/[slug]/events/[eventId]
 
Forms
/chapter/[slug]/forms
Form detail → /chapter/[slug]/forms/[formId]
 
 
 
Form fill → /chapter/[slug]/forms/[formId]/fill
 
Attendance
/chapter/[slug]/attendance
—
 
Clusters
/chapter/[slug]/clusters
Cluster detail → /chapter/[slug]/clusters/[clusterId]
 
Projects
/chapter/[slug]/projects
—
 
Classes
/chapter/[slug]/classes
—
People & Ops
Community
/chapter/[slug]/community
—
 
Students
/chapter/[slug]/students
—
 
Leadership
/chapter/[slug]/leadership
—
 
Tasks
/chapter/[slug]/tasks
—
 
Announcements
/chapter/[slug]/announcements
—
 
Reports
/chapter/[slug]/reports
Report detail → /chapter/[slug]/reports/[reportId]
 
Settings
/chapter/[slug]/settings
—
 
Resources
/chapter/[slug]/resources
—
More
Alerts
/notifications
—
 
Leaderboards
/leaderboards
—
 
Playbook
/eos
—

7. Class Rep · CSE Boy

Role key: class_representative
Demo account id: u-cr-cse-boy
Lands on login: /executive
Note: Same role & routes as "Class Rep · CSE Girl" — a second demo account for the same role.
 

Menu Group
Option
Route
Sub-route (if any)
Home
Desk
/executive
—
 
Chapter
/chapter/[slug]
—
 
Analytics
/chapter/[slug]/analytics
—
Programs
Calendar
/chapter/[slug]/calendar
—
 
Events
/chapter/[slug]/events
Event detail → /chapter/[slug]/events/[eventId]
 
Forms
/chapter/[slug]/forms
Form detail → /chapter/[slug]/forms/[formId]
 
 
 
Form fill → /chapter/[slug]/forms/[formId]/fill
 
Attendance
/chapter/[slug]/attendance
—
 
Clusters
/chapter/[slug]/clusters
Cluster detail → /chapter/[slug]/clusters/[clusterId]
 
Projects
/chapter/[slug]/projects
—
 
Classes
/chapter/[slug]/classes
—
People & Ops
Community
/chapter/[slug]/community
—
 
Students
/chapter/[slug]/students
—
 
Leadership
/chapter/[slug]/leadership
—
 
Tasks
/chapter/[slug]/tasks
—
 
Announcements
/chapter/[slug]/announcements
—
 
Reports
/chapter/[slug]/reports
Report detail → /chapter/[slug]/reports/[reportId]
 
Settings
/chapter/[slug]/settings
—
 
Resources
/chapter/[slug]/resources
—
More
Alerts
/notifications
—
 
Leaderboards
/leaderboards
—
 
Playbook
/eos
—

8. Student · Ananya

Role key: student
Demo account id: u-student-1
Lands on login: /chapter/ekc
Note: Explore-only menu — no admin/ops sections.
 

Menu Group
Option
Route
Sub-route (if any)
Explore
Chapter
/chapter/[slug]
—
 
Events
/chapter/[slug]/events
Event detail → /chapter/[slug]/events/[eventId]
 
Clusters
/chapter/[slug]/clusters
Cluster detail → /chapter/[slug]/clusters/[clusterId]
 
Projects
/chapter/[slug]/projects
—
 
Community
/chapter/[slug]/community
—
 
Forms
/chapter/[slug]/forms
Form detail → /chapter/[slug]/forms/[formId]
 
 
 
Form fill → /chapter/[slug]/forms/[formId]/fill
 
Reports
/chapter/[slug]/reports
Report detail → /chapter/[slug]/reports/[reportId]
 
Announcements
/chapter/[slug]/announcements
—
 
Leaderboards
/leaderboards
—
 
Alerts
/notifications
—
More
Playbook
/eos
—