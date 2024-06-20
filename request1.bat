@echo off
@for /f %%R in (curl "www.google.com") do ( Set VAR=%%R )
echo %VAR% 