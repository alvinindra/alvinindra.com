from pathlib import Path
import json, msgpack
ROOT=Path(r'C:\Users\Alvin\AppData\LocalLow\Newnormal Soft\War of Genesis Idle Loot\bin')
ASSETS=Path(r'D:\SteamLibrary\steamapps\common\War of Genesis Idle Loot\Genesis_Data\StreamingAssets\aa\StandaloneWindows64')
def rows(name):
 u=msgpack.Unpacker(raw=False,strict_map_key=False);u.feed((ROOT/(name+'_table.bin')).read_bytes());return list(u)[1:]
if __name__=='__main__':
 for name in ['Item','Monster','Stage','Locale']:
  print(name,json.dumps(rows(name)[:2],ensure_ascii=True))
 print('bundles',[p.name for p in ASSETS.glob('*') if any(x in p.name.lower() for x in ['icon','sprite','atlas','stage','item'])])
 print('difficulty locale',json.dumps([r for r in rows('Locale') if any(x in str(r[0]).lower() for x in ['difficulty','nightmare','veryhard','stagearea'])],ensure_ascii=True))
