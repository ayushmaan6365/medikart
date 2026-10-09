@echo off
title MediKart Local Server
echo ========================================================
echo   Starting MediKart Local Server...
echo ========================================================
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause
