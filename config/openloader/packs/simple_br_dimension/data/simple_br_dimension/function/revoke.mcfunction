#say Revoke ran
execute as @e[tag=simple_br_dimension.leaving] run advancement revoke @p[tag=simple_br_dimension.leaving] only simple_br_dimension:enter
execute as @e[tag=simple_br_dimension.leaving] run advancement revoke @p[tag=simple_br_dimension.leaving] only simple_br_dimension:leave
execute as @e[tag=simple_br_dimension.leaving] run tag @s remove simple_br_dimension.leaving