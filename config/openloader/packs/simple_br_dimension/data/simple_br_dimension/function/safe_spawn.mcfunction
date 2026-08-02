# this is executed by server
#say Safe Spawn ran
teleport @e[tag=simple_br_dimension.entering] @e[type=minecraft:armor_stand,tag=simple_br_dimension.spawn,limit=1,sort=nearest]
execute as @s run tag @s remove simple_br_dimension.entering