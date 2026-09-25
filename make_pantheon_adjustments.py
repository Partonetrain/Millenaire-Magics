#use pip install nbt-structure-utils before running
import shutil

from nbt_structure_utils import NBTStructure

PANTHEON_LOCATION = "millenaire/cultures/norman/buildings/lone/pantheon_a_0.nbt"
TARGET_LOCATION = "millenaire/cultures/norman/buildings/lone/pantheon_a_0.nbt" #millenaire-custom has a filesize limit! this should go there instead of under /millenaire/, but the pantheon is too big!
BACKUP_LOCATION = "pantheon_a_0.nbt.backup"  #copy to folder running this script from

REPLACEMENTS: dict[str, str] = {
    "minecraft:emerald_block": "quark:lime_shingles",
    "minecraft:iron_block": "quark:calcite_bricks",
    "minecraft:lapis_block": "blockbox:lapis_lazuli_bricks",
    "minecraft:gold_block": "blockbox:golden_tiles",
    "minecraft:glass": "quark:white_framed_glass",
    "minecraft:heavy_weighted_pressure_plate": "minecraft:pale_oak_pressure_plate",
    "minecraft:iron_door": "minecraft:pale_oak_door"
}


shutil.copy2(PANTHEON_LOCATION, BACKUP_LOCATION) #make a backup

structure = NBTStructure(PANTHEON_LOCATION)

replaced_count = 0
for block in structure.palette:
    if block.name in REPLACEMENTS:
        print(f"Replacing {block.name} -> {REPLACEMENTS[block.name]}")
        block.name = REPLACEMENTS[block.name]
        replaced_count += 1

print(f"Replaced {replaced_count}")

structure.get_nbt().write_file(filename=TARGET_LOCATION) 