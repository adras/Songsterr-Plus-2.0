Set-Location src


$zipPath = "..\extension.zip"
$xpiPath = "..\SongsterrPlus.xpi"

if (Test-Path $zipPath) {
    Remove-Item -Path $zipPath -Force
}

if (Test-Path $xpiPath) {
    Remove-Item -Path $xpiPath -Force
}


Compress-Archive -Path "*" -DestinationPath $zipPath


Rename-Item -Path $zipPath -NewName "SongsterrPlus.xpi"

Set-Location ..
