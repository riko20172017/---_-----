@echo off

set params=-H "Accept: application/json, text/plain, */*" ^
  -H "Accept-Language: ru,en;q=0.9" ^
  -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJnNlZRTXF0TmNsd3N1WUdmWW5ZLWFqdThBWVVvd20xR0dxbFAzQmswUTMwIn0.eyJleHAiOjE3MTg5MDkzODQsImlhdCI6MTcxODg4MDU4NCwiYXV0aF90aW1lIjoxNzE4ODgwNTg0LCJqdGkiOiI3ZGE2MDk5OC02YzcwLTRkNjQtODRmYS01ZDdkMTc1ZjQyZmUiLCJpc3MiOiJodHRwczovL2xvZ2luLm15c2Nob29sLmVkdS5ydS9hdXRoL3JlYWxtcy9ldGQtcmVhbG0iLCJzdWIiOiJmM2RhZmFkZi02ZDBiLTRkYzMtOGUxYy02NzJjYzE2ZTQ4NTgiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJlczEiLCJub25jZSI6IjEyODg3YzNiLWM5MDUtNGZiNC05Yzg1LTNjYzhhMzNlMzFkZCIsInNlc3Npb25fc3RhdGUiOiIzNTI5ZTNkMi0zNDU4LTQ2YTQtYmIzZi05NzdmM2Y1NjRkNGYiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbIioiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIjEiLCIyIiwiQWRtaW5Qcm9maWxlIiwiMi4xIiwiMS4zIiwib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwic2NvcGUiOiJvcGVuaWQgQWRtaW5Sb2xlLnJlYWQgQ29udHJpYnV0b3JQcm9maWxlLnJlYWQgQXVkaXRFdmVudC53cml0ZSBlbWFpbCBlc2lhSWRlbnRpZmllclNjb3BlIENvbnRyaWJ1dG9yUHJvZmlsZS53cml0ZSBQdXBpbFByb2ZpbGUud3JpdGUgQ29udHJpYnV0b3JSb2xlLndyaXRlIFB1cGlsUm9sZS53cml0ZSByZWFkIHByb2ZpbGUgRWR1UHJvdmlkZXJSb2xlLnJlYWQgR3JvdXAucmVhZCBOZXh0T2ZLaW5Qcm9maWxlLnJlYWQgRWR1R3JvdXAucmVhZCBFZHVQcm92aWRlclJvbGUud3JpdGUgTmV4dE9mS2luUm9sZS5yZWFkIEVkdVByb3ZpZGVyUHJvZmlsZS5yZWFkIENvbnRleHRUeXBlLnJlYWQgQXV0aEFjY291bnQucmVhZCBGdW5jdGlvbmFsUm9sZVR5cGUucmVhZCBBdWRpdEV2ZW50LnJlYWQgRWR1T3JnYW5pemF0aW9uR3JvdXAucmVhZCBPcmdhbml6YXRpb24ucmVhZCBQdXBpbFJvbGUucmVhZCBQZXJzb24ucmVhZCBOZXh0T2ZLaW5Sb2xlLndyaXRlIEF1dGhBY2NvdW50LndyaXRlIGV0ZElkZW50aWZpZXJTY29wZSBQdXBpbFByb2ZpbGUucmVhZCBBZG1pblByb2ZpbGUucmVhZCBFZHVQcm92aWRlclByb2ZpbGUud3JpdGUgTmV4dE9mS2luUHJvZmlsZS53cml0ZSBDb250cmlidXRvclJvbGUucmVhZCBTdHJ1Y3R1cmFsUm9sZVR5cGUucmVhZCBBY2Nlc3NSaWdodHMucmVhZCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZ2VuZGVyIjoiTSIsImVzaWFJZGVudGlmaWVyIjoiMTAwNDc1MjYxOSIsIm5hbWUiOiLQkNC90LfQvtGAINCT0YPQsdC20L7QutC-0LIiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiIwNjktMzMxLTYzMCA3MSIsIm1pZGRsZV9uYW1lIjoi0KHQu9Cw0LLQvtCy0LjRhyIsImdpdmVuX25hbWUiOiLQkNC90LfQvtGAIiwiZmFtaWx5X25hbWUiOiLQk9GD0LHQttC-0LrQvtCyIiwiZW1haWwiOiJnX2FuekBtYWlsLnJ1IiwiZXRkX2lkIjo2MzEzMDE3fQ.o6uoX4uzVvktheVrAmkKffqwwnG61_rwNRX4lUu194GUXplp_aUt9ezzUok92MOwgBvtYgq01fjpe9v5k42tifs_Fnqkac-E9jDYvZQm61Ji20dFBTizHX0pXJirDg3CHif_nLVRvWrenSMQsIOxstWANF2qb0INtSrAKEEKkvcGGzQmuTq9j6kUOqU191uPd5lnvbfdpPCaSibvsqQ1fVgPHvJkahQoeJm6MiWpdfPm7q0CletiRQnipszvn10wHj2hejufCdDG5sj89cuKoqq70lHLg6-HSCkRP_gSID1LwGqrOJZyM4sNFR-VYLLbuFPHpkOvA4UtpAU2dE2mdw" ^
  -H "Connection: keep-alive" ^
  -H "Cookie: session-cookie=17da73fb0c46169d090616ac80267f935ccff281aa095463df47d91e869d3ac6974210c37a4d7d6e5e3f7422101e7c5c; JSESSIONID=9EA622D8BF94ACC1ADD3F9070ACAFF44" ^
  -H "Referer: https://users-management.myschool.edu.ru/" ^
  -H "Sec-Fetch-Dest: empty" ^
  -H "Sec-Fetch-Mode: cors" ^
  -H "Sec-Fetch-Site: same-origin" ^
  -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 YaBrowser/24.6.0.0 Safari/537.36" ^
  -H ^"sec-ch-ua: ^\^"Chromium^\^";v=^\^"124^\^", ^\^"YaBrowser^\^";v=^\^"24.6^\^", ^\^"Not-A.Brand^\^";v=^\^"99^\^", ^\^"Yowser^\^";v=^\^"2.5^\^"^" ^
  -H "sec-ch-ua-mobile: ?0" ^
  -H ^"sec-ch-ua-platform: ^\^"Windows^\^"^"

set url=https://users-management.myschool.edu.ru/admin/EduGroup/content/

set groupList=733780 733781 733782

echo [ > text.txt
(for %%a in (%groupList%) do ( 
   curl %url%%%a %params% >> text.txt
))
echo ] >> text.txt

start node index.js