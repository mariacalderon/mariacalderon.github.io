#!/bin/bash
# Usage: render.sh <name>  (renders <name>.html to <name>@2x.png at its natural height)
set -e
cd "$(dirname "$0")"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
NAME="$1"
sed 's#</body>#<script>document.fonts.ready.then(()=>{document.title="H="+document.body.scrollHeight})</script></body>#' "$NAME.html" > "measure-$NAME.html"
H=$("$CHROME" --headless=new --disable-gpu --allow-file-access-from-files --window-size=1600,1000 --virtual-time-budget=4000 --dump-dom "file://$PWD/measure-$NAME.html" 2>/dev/null | grep -o "H=[0-9]*" | cut -d= -f2)
"$CHROME" --headless=new --disable-gpu --hide-scrollbars --allow-file-access-from-files --force-device-scale-factor=2 --window-size=1600,$H --virtual-time-budget=4000 --screenshot="$PWD/$NAME@2x.png" "file://$PWD/$NAME.html" >/dev/null 2>&1
rm "measure-$NAME.html"
echo "$NAME: 1600x$H"
