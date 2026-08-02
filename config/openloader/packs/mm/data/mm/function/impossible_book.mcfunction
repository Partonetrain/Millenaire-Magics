execute as @s run tellraw @s {"text":"You somehow managed to obtain the \"for functions do not use\" enchanted book, which is not supposed to be obtainable. I've decided to give you a Soulbound book in its place. You're welcome. - Train","italic":true,"color":"gray"}
clear @a[limit=1,advancements={mm:impossible_book=true}] minecraft:enchanted_book[stored_enchantments={levels:{"notenoughtrials:storm_front_marker":1}}] 1
loot give @a[limit=1,advancements={mm:impossible_book=true}] loot mm:soulbound
schedule function mm:impossible_book_revoke 1s