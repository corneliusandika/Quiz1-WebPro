@echo off
cd /d "%~dp0"

where python >nul 2>nul
if %errorlevel%==0 (
  set "PY=python"
) else (
  set "PY=py"
)

echo.
echo  Website personal - Kota Madiun
echo  Server berjalan di: http://localhost:8000/quiz1/
echo  (Tekan Ctrl+C untuk menghentikan server)
echo.

start "" "http://localhost:8000/quiz1/"
%PY% -m http.server 8000
