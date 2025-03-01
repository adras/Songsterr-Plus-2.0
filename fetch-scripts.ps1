foreach($b in $(Get-ChildItem -Path src/latest **)) {
    Write-Output $b;
    $f=$b.Name
    & curl.exe -L "https://static2.songsterr.com/production-main/static2/latest/$f" -o "src/latest/$f"
}