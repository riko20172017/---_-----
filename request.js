let params = {
    "headers": {
        "accept": "application/json, text/plain, */*",
        "accept-language": "ru,en;q=0.9",
        "authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJnNlZRTXF0TmNsd3N1WUdmWW5ZLWFqdThBWVVvd20xR0dxbFAzQmswUTMwIn0.eyJleHAiOjE3MTg4NDI2MTgsImlhdCI6MTcxODgxMzgxOCwiYXV0aF90aW1lIjoxNzE4ODEzODE4LCJqdGkiOiIzNDA4ODMyYS1mNzI1LTQwZTgtYWM1MS1lNGZlM2JkY2U1NjMiLCJpc3MiOiJodHRwczovL2xvZ2luLm15c2Nob29sLmVkdS5ydS9hdXRoL3JlYWxtcy9ldGQtcmVhbG0iLCJzdWIiOiJmM2RhZmFkZi02ZDBiLTRkYzMtOGUxYy02NzJjYzE2ZTQ4NTgiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJlczEiLCJub25jZSI6Ijg3MGNhYTc3LWRjZjItNGZkZS05N2ZmLTI3N2RmNTVkOTk4MyIsInNlc3Npb25fc3RhdGUiOiI4MGFmY2I4MS1mZDE1LTQ0N2MtOTE3ZC02MDhlNTFiYWFjNWMiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbIioiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIjEiLCIyIiwiQWRtaW5Qcm9maWxlIiwiMi4xIiwiMS4zIiwib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwic2NvcGUiOiJvcGVuaWQgQWRtaW5Sb2xlLnJlYWQgQ29udHJpYnV0b3JQcm9maWxlLnJlYWQgQXVkaXRFdmVudC53cml0ZSBlbWFpbCBlc2lhSWRlbnRpZmllclNjb3BlIENvbnRyaWJ1dG9yUHJvZmlsZS53cml0ZSBQdXBpbFByb2ZpbGUud3JpdGUgQ29udHJpYnV0b3JSb2xlLndyaXRlIFB1cGlsUm9sZS53cml0ZSByZWFkIHByb2ZpbGUgRWR1UHJvdmlkZXJSb2xlLnJlYWQgR3JvdXAucmVhZCBOZXh0T2ZLaW5Qcm9maWxlLnJlYWQgRWR1R3JvdXAucmVhZCBFZHVQcm92aWRlclJvbGUud3JpdGUgTmV4dE9mS2luUm9sZS5yZWFkIEVkdVByb3ZpZGVyUHJvZmlsZS5yZWFkIENvbnRleHRUeXBlLnJlYWQgQXV0aEFjY291bnQucmVhZCBGdW5jdGlvbmFsUm9sZVR5cGUucmVhZCBBdWRpdEV2ZW50LnJlYWQgRWR1T3JnYW5pemF0aW9uR3JvdXAucmVhZCBPcmdhbml6YXRpb24ucmVhZCBQdXBpbFJvbGUucmVhZCBQZXJzb24ucmVhZCBOZXh0T2ZLaW5Sb2xlLndyaXRlIEF1dGhBY2NvdW50LndyaXRlIGV0ZElkZW50aWZpZXJTY29wZSBQdXBpbFByb2ZpbGUucmVhZCBBZG1pblByb2ZpbGUucmVhZCBFZHVQcm92aWRlclByb2ZpbGUud3JpdGUgTmV4dE9mS2luUHJvZmlsZS53cml0ZSBDb250cmlidXRvclJvbGUucmVhZCBTdHJ1Y3R1cmFsUm9sZVR5cGUucmVhZCBBY2Nlc3NSaWdodHMucmVhZCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZ2VuZGVyIjoiTSIsImVzaWFJZGVudGlmaWVyIjoiMTAwNDc1MjYxOSIsIm5hbWUiOiLQkNC90LfQvtGAINCT0YPQsdC20L7QutC-0LIiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiIwNjktMzMxLTYzMCA3MSIsIm1pZGRsZV9uYW1lIjoi0KHQu9Cw0LLQvtCy0LjRhyIsImdpdmVuX25hbWUiOiLQkNC90LfQvtGAIiwiZmFtaWx5X25hbWUiOiLQk9GD0LHQttC-0LrQvtCyIiwiZW1haWwiOiJnX2FuekBtYWlsLnJ1IiwiZXRkX2lkIjo2MzEzMDE3fQ.LPq7MEjeLfrBo6y8ke1fFl7wTzQIgU69rZD6sOQPhC7jNvfRkSErcRAVtYVISTB4-A_Pa74BfuO2UsayNnX7tsIH6Af5qncFFlQv7Uz-NcmVomxVROxa2G2f7Ck77dJ3Ajk9Tx_k8vCaHQxMmIkcTP-tXG1hNyh8JM3Kzp-AobOPEFYCY5ZyhVQaHZ7Ddn_0cbJ-ekTwczjS5CN1F1P3Qo27kjQZ_pRm5-0tUKg-4Yn_eRg-iT2Sy-nocINEUzf3fPmL_WfG8b_AkgNe22Te-AAx9neeYzfPEvivCAfEMrXLPlEIlNUUN65L7zGO2KtmiACL83HTPfi8WBlCqmLzIA",
        "sec-ch-ua": "\"Chromium\";v=\"124\", \"YaBrowser\";v=\"24.6\", \"Not-A.Brand\";v=\"99\", \"Yowser\";v=\"2.5\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "cookie": "session-cookie=17da73fb0c46169d090616ac80267f935ccff281aa095463df47d91e869d3ac6974210c37a4d7d6e5e3f7422101e7c5c; JSESSIONID=9EA622D8BF94ACC1ADD3F9070ACAFF44",
        "Referer": "https://users-management.myschool.edu.ru/",
        "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "GET"
}
fetch("https://users-management.myschool.edu.ru/admin/EduGroup/content/733781", params);

(async () => {
    let response = await fetch("https://users-management.myschool.edu.ru/admin/EduGroup/content/733781", params);

    if (response.ok) { // если HTTP-статус в диапазоне 200-299
        // получаем тело ответа (см. про этот метод ниже)
        let json = await response.json();
        console.log(json);
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
})()
