## D&D {{logo}} REVISADO

# MONK v5.1

<!---
The "styling" code below is inside the curly brackets {}. Feel free to adjust those to see what changes. 
--->
![Front Cover Image](https://cdnb.artstation.com/p/assets/images/images/017/688/615/large/tamas-patkos-monk-dev.jpg?1556969175) {bottom:-7.4%,left:-16px,height:115%}

\page

<!---
The Table of Contents can be automagically generated using the TEXT EDITOR menu, then TABLE OF CONTENTS buttons at the top of this editor window. The table below was generated that way, with only some minor adjustments.
--->

{{toc,wide
# Table of Contents

- ### [{{ Chapter 1 - D&DR Monk 5.1}}{{ 3}}](#p3)
- ### [{{ Chapter 2 - Monk Techniques}}{{ 6}}](#p6)
- ### [{{ Chapter 3 - Alternate Monk Traditions}}{{ 10}}](#p10)
  - #### [{{ Alternate Sun Soul}}{{ 10}}](#p10)
- ### [{{ Chapter 4 - New Monk Traditions}}{{ 11}}](#p11)
  - #### [{{ Way of the Bow}}{{ 11}}](#p11)
  - #### [{{ Way of the Chronicle}}{{ 12}}](#p12)
  - #### [{{ Way of the Dragon}}{{ 13}}](#p13)
  - #### [{{ Way of the Fist}}{{ 14}}](#p14)
  - #### [{{ Way of the Four Fists}}{{ 15}}](#p15)
  - #### [{{ Way of the Four Truths}}{{ 16}}](#p16)
  - #### [{{ Way of the Gladiator}}{{ 17}}](#p17)
  - #### [{{ Way of the Ghostspeaker}}{{ 18}}](#p18)
  - #### [{{ Way of the Hidden Doors}}{{ 19}}](#p19)
  - #### [{{ Way of the Honed Mind}}{{ 20}}](#p20)
  - #### [{{ Way of Iron}}{{ 21}}](#p21)
  - #### [{{ Way of the Leaden Crown}}{{ 22}}](#p22)
  - #### [{{ Way of Mundanity}}{{ 23}}](#p23)
  - #### [{{ Way of Pain}}{{ 24}}](#p24)
  - #### [{{ Way of Pride}}{{ 25}}](#p25)
  - #### [{{ Way of the Silver Lantern}}{{ 26}}](#p26)
  - #### [{{ Way of the Soulwinds}}{{ 27}}](#p27)
  - #### [{{ Way of the Street Fighting}}{{ 29}}](#p29)
  - #### [{{ Way of Tattooed Temple}}{{ 30}}](#p30)
}}

{{pageNumber,auto}}
\page

<!---
The .chapter class here is cool, and flexible for whether the h1 or h2 header is included, what order they're in, etc.

If you want to forgo the gradient background, just delete "gradient", and if you want to forgo the drop cap formatting (the first big letter after the chapter), just add ",noCap" to the end of the line.

The main thing here is that the h2 header (the small one) and the gradient colors are linked, and can both be changed entirely by changing the --color value. Visit www.hexcolortool.com to pick a color with a usable hexadecimal code. Below are the (approximate) color values in the actual PHB.
--->

<!---
PHB Color values by chapter:

- Intro/Index (Yellow)      : #b39a59
- Chapter 1 (Pink-red)      : #9a4835
- Chapter 2 (Green)         : #676b36
- Chapter 3 (Red-Orange)    : #a74d3a
- Chapter 4 (Light Blue)    : #8a86b2
- Chapter 5 (Dark Red)      : #7c4848
- Chapter 6 (Cyan)          : #5fa7a1
- Chapter 7 (Mauve)         : #9a677b

- Appendix A (Light Purple) : #a092a0
- Appendix B (Nat Yellow)   : #c0b797
- Appendix C (Yellow)       : #b39a59 
--->

<!---
The three underscores below form the gray-bar separator, and are used in lots of different parts of the 2024 books. It technically isn't used in THIS part of the DMG, but I added it anyway. You don't own me.

You can also use double colon (:)(:) to put the paragraph first line at the beginning then add a small tab on the next ones. 
--->

{{chapter,gradient,--color:#7c4848

## Chapter 1
# D&DR Monk 5.1
___
}}

<div class="wide flavor subtitle">Monks are united in their ability to magically harness the energy that flows in their bodies. Whether channeled as a striking display of combat prowess or a subtler focus of defensive ability and speed, this energy infuses all that a monk does.</div>

{{classTable,frame,decoration,wide
##### The Monk 
| Level | Proficiency Bonus | Features | Martial Arts | Unarmored Movement | Techniques Known |
|:---:|:---:|:---|:---:|:---:|:---:|
| 1st | +2 | Martial Arts, Unarmored Defense | 1d6 | — | — |
| 2nd | +2 | Ki, Flurry of Blows, Unarmored Movement | 1d6 | +10 ft. | — |
| 3rd | +2 | Monastic Tradition | 1d6 | +10 ft. | 1 |
| 4th | +2 | Ability Score Improvement | 1d6 | +10 ft. | 2 |
| 5th | +3 | Extra Attack | 1d8 | +15 ft. | 3 |
| 6th | +3 | Enlightened Fist, Monastic Tradition Feature | 1d8 | +15 ft. | 4 |
| 7th | +3 | Evasion | 1d8 | +15 ft. | 5 |
| 8th | +3 | Ability Score Improvement | 1d8 | +15 ft. | 6 |
| 9th | +4 | Spirit of Tranquility | 1d8 | +20 ft. | 7 |
| 10th | +4 | Ki Adept | 1d8 | +20 ft. | 8 |
| 11th | +4 | Monastic Tradition Feature | 1d10 | +20 ft. | 9 |
| 12th | +4 | Ability Score Improvement | 1d10 | +20 ft. | 10 |
| 13th | +5 | Purity of Body | 1d10 | +25 ft. | 11 |
| 14th | +5 | Purity of Mind | 1d10 | +25 ft. | 12 |
| 15th | +5 | Timeless Body | 1d10 | +25 ft. | 13 |
| 16th | +5 | Ability Score Improvement | 1d10 | +25 ft. | 14 |
| 17th | +6 | Monastic Tradition Feature | 1d12 | +30 ft. | 15 |
| 18th | +6 | — | 1d12 | +30 ft. | 16 |
| 19th | +6 | Ability Score Improvement | 1d12 | +30 ft. | 17 |
| 20th | +6 | Perfect-Self | 1d12 | +30 ft. | 18 |
}}

{{pageNumber,auto}}
\page

{{classSymbol ![](https://bg3.wiki/w/images/9/93/Class_Monk_Badge_Icon.png) {width:40px,margin-top:5px} }}

{{classTraits
##### Core Monk Traits
|                                |                                                                                          |
|:-------------------------------|:-------------------------------------------------------------------------------------------|
| **Hit Point Die**              | D10 per Monk level                                                                         |
| **Hit Points at 1st Level**    | 10 + your Constitution modifier                                                            |
| **Hit Points at Higher Levels**| 1d10 (6) + your Constitution modifier                                                      |
| **Saving Throw Proficiencies** | Strength and Dexterity                                                                    |
| **Skill Proficiencies**        | *Choose 2:* Acrobatics, Athletics, Culture, History, Insight, Perception, Religion, or Stealth |
| **Weapon Proficiencies**       | Simple weapons, shortswords                                                               |
| **Armor Training**             | None                                                                                      |
| **Tool Proficiencies**         | One type of artisan's tools or one musical instrument                                     |
| **Starting Equipment**         | *Choose A or B:* (A) Shortsword, Dungeoneer's Pack, 10 Darts; or (B) Simple Weapon, Explorer's Pack, 10 Darts |
}}


## Monk Class Features

### Level 1 - Martial Arts

You honed your body into a weapon, mastering many styles of martial arts. For the purposes of your Monk abilities, Martial Arts attacks are unarmed strikes, and any attacks with melee weapons that lack the Heavy or Special properties.

Starting at 1st level, so long as you are not wearing heavy armor, wielding a shield, or wielding a Heavy weapon, your Martial Arts attacks gain the benefits listed below:

- You can use your Dexterity, in place of Strength, for the attack and damage rolls of your Martial Arts attacks.

- You can make a Dexterity (Athletics) check to grapple or shove in place of the normal Strength (Athletics) check.

- You can roll your Martial Arts die in place of the normal damage of a Martial Arts attack. This die starts out as a d6 and changes as you gain Monk levels, as indicated in the Martial Arts column of the Monk table above.

- When you take the Attack action on your turn and make a Martial Arts attack, you can use your bonus action on that same turn to make a single unarmed strike attack.

Some styles of Martial Arts make use of exotic weapons like nunchaku (clubs), kamas (sickles), or sai (daggers).

\column

### Level 1 - Unarmored Defense

You have trained to defend yourself from deadly strikes even when unarmored. Beginning at 1st level, so long as you aren't wearing armor and not wielding a shield, your Armor Class equals 10 + your Dexterity modifier + your Wisdom modifier.

### Level 2 - Ki

At 2nd level, you learn to manipulate the spiritual energy that resides within you, known as Ki. You can draw on your Ki to perform supernatural physical feats known as Techniques.

#### Ki Points

Your spiritual power is represented by a pool of Ki, equal to your Monk level + your Wisdom modifier (minimum of 0). Ki is expended when you use it, and you regain all spent ki whenever you finish a short or long rest. You can only expend Ki on one feature or Technique per attack, ability check, reaction or saving throw. 

#### Techniques Known

At 2nd level, you automatically learn the Patient Defense and Step of the Wind Techniques, and these do not count against your limit of Techniques Known. 

Additionally, you learn three Initiate Techniques of your choice from the list at the end of this class description. You can only use one technique per each attack, ability check, reaction or saving throw.

The Monk table shows when you learn more Techniques of your choice. When you gain a Monk level, you can replace one Technique you know with another Technique of your choice.

#### Saving Throws

Techniques rely on your mastery of body and spirit, and grow in proportion to your self-control. When a Technique requires a saving throw, its saving throw is calcuulated as follows:

**Technique save DC** = 8 + your Proficiency Bonus + your Wisdom modifier

#### Flurry of Blows

All Monks, no matter their training or level of enlightenment, can channel spiritual power to strike their foes with blinding speed. As a bonus action on each of your turns, you can spend 1 Ki to make two unarmed strikes.

### Level 2 - Unarmored Movement

Your pursuit of physical perfection has awakened the hidden potential of your body. At 2nd level, your speed increases by 10 feet so long as you are not wearing armor or a shield.

This speed bonus increases as you gain levels, as indicated in the Unarmored Movement column of the Monk table.

{{pageNumber,auto}}
\page

### Level 3 - Monastic Tradition

At 3rd level, choose one of the following Monastic Traditions that best represents your training and philosophy as a Monk. The Monastic Tradition you choose grants you features at 3rd level, and again when you reach 6th, 11th, and 17th level.

### Level 4 - Ability Score Improvement

When you reach 4th level, and again at 8th, 10th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.

### Level 5 - Extra Attack

Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.

### Level 6 - Enlightened Fist

Your spirit empowers your strikes. Starting at 6th level, your unarmed strikes count as magical for the purposes of overcoming resistances and immunities to non-magical attacks and damage.

### Level 7 - Evasion 

Starting at 7th level, your instinctive agility lets you dodge out of the way of certain area effects, such as a black dragon's acid breath or a *lightning bolt* spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you take no damage if you succeed on the saving throw, and only half damage if you fail.

### Level 9 - Spirit of Tranquility

Beginning at 9th level, you can draw upon your spiritual vitality to bolster your physical and mental defenses. When you are forced to make a saving throw, you can spend 1 Ki to add your Wisdom modifier (minimum of +1) to the result of your roll.

### Level 11 - Ki Adept

Your training has pushed your body and mind to new levels. You gain the following improvements to your basic techniques:

- **Flurry of Blows.** You can spend 1 Ki to use Flurry of Blows and make three Unarmed Strikes with it instead of two.
- **Patient Defense.** When you spend a Ki to use Patient Defense, you gain a number of Temporary Hit Points equal to two rolls of your Martial Arts die.
- **Step of the Wind.** When you spend a Ki to use Step of the Wind, you can choose a willing creature within 5 feet of you that is Large or smaller. You move the creature with you until the end of your turn. The creature’s movement doesn’t provoke Opportunity Attacks.

Additionally, you regain 1 expended Ki at the start of each of your turns in combat, so long as you are not incapacitated.

### Level 13 - Purity of Body

Your mastery over your body protects you from ailments. At 13th level, you gain immunity to all disease and to the poisoned condition.

### Level 14 - Purity of Mind

Starting at 14th level, if you are charmed or frightened when you start your turn, you can spend 1 Ki to instantly end either of these conditions for yourself.

### Level 15 - Timeless Body

You have completely detached yourself from all desires of the flesh. Beginning at 15th level, you no longer require food or water and you suffer none of the frailty of old age. Also, for every 10 years that pass your physical body only ages 1 year.

### Level 20 - Perfect-Self

At 20th level you become a magical creature that transcends the mortal limits. You gain the following benefits:

- **Perfection Achieved.** Instead of being treated as a humanoid, you can choose to be treated as a celestial, a fey or a fiend.
- **Physical and Mental Perfection.** Additionally, you reach both physical and mental perfection. You gain a +2 bonus to all your ability scores. Your maximum for those scores is now 22.

{{pageNumber,auto}}
\page

{{chapter,gradient,--color:#7c4848

## Chapter 2
# Monk Techniques
___
}}

### Initiate Techniques

#### Arresting Strike

When you hit a creature with a melee Martial Arts attack, you can spend 1 Ki to stunt its mobility and force it to make a Dexterity saving throw. On a failed save, the target's speed is reduced to zero until the beginning of your next turn.

#### Crippling Strike

When you hit a creature with a melee Martial Arts attack, you can spend 1 Ki to cripple its senses and force the target to make a Constitution saving throw. On a failure, the target is either blinded, deafened, or unable to speak (your choice) until the beginning of your next turn.

#### Dazing Strike

Once per turn when you hit a creature with a melee Martial Arts attack, you can expend 1 Ki to strike its head, forcing it to make a Wisdom saving throw. On a failed save, the target must subtract 1d4 from the first ability check, attack roll, or saving throw it makes before the start of your next turn.

#### Empowered Strike

When you hit a creature with a melee Martial Arts attack, you can spend 1 Ki to strike with great power and force the target to make a Strength saving throw. On a failed save, it is knocked back in a straight line a number of feet equal to five times your Wisdom modifier (minimum of 5 feet), where it falls prone. A creature that is at least one size larger than you has advantage on its saving throw to resist this effect.

#### Enhanced Grip

Each time a creature starts its turn grappled by you it takes bludgeoning damage equal to your Martial Arts Die. You can also drag grappled creatures up to your full speed.

#### Improvised Strikes

You are adept at fighting with whatever is at hand. You gain proficiency with improvised weapons, they count as Martial Arts attacks for you, and you can use your Dexterity, in place of Strength, for improvised weapon attack and damage rolls.

#### Mystic Healing

You can draw on your Ki to stimulate natural healing. As an action, you can spend 2 Ki to regain hit points equal to one roll of your Martial Arts die + your Wisdom modifier.

#### Patient Defense

You quiet your spirit, entering a defensive stance to better defend against incoming blows. You can spend 1 Ki to take the Dodge action as a bonus action on your turn.

#### Slow Fall

You move through the air as light as a feather. Any falling damage you would take is reduced by an amount equal to five times your level, so long as you are conscious.

#### Spiritual Armor

You can reinforce your body with spiritual power. As a bonus action, you can spend 1 Ki to grant yourself temporary hit points equal to your Wisdom modifier (minimum of 1).

The first time a creature deals damage to these temporary hit points, you can use your reaction to cause it to take force damage equal to one roll of your Martial Arts die.

#### Step of the Wind

You move with the speed of the wind. You can take the Dash or Disengage action as a bonus action. When you do so, your jump distance is doubled until the end of your current turn.

#### Whirling Strike

As an action, you can spend 1 Ki to strike out and force every creature within your reach to make a Dexterity saving throw. On a failed save, they take bludgeoning damage equal to your Martial Arts die + your Dexterity modifier.

### Disciple Techniques (5th-level Techniques)

#### Adept Fighting Style

You have trained in a specialized style of fighting. Choose one of the following Fighting Styles from the Fighter class: Archery, Blind Fighting, Defensive Fighting, Dueling, Featherweight Training, Thrown Weapon Fighting, or Wrestler.

{{pageNumber,auto}}
\page

#### Crushing Strike

When you hit with an unarmed strike, you can spend Ki (up to your Wisdom modifier) to empower your strike with deadly force and deal additional bludgeoning damage equal to one roll of your Martial Arts die per Ki spent.

#### Deflect Attacks

When an attack roll hits you and its damage includes bludgeoning, piercing, or slashing damage, you can take a reaction to reduce the attack's total damage against you by an amount equal to one roll of your Martial Arts die + your Dexterity modifier + your Monk level.

If you reduce the damage to 0, you can expend 1 Ki to redirect some of the attack's force. If you do so, choose a creature you can see within 5 feet of yourself if the attack was a melee attack or a creature you can see within 60 feet of yourself that isn't behind total cover if the attack was a ranged attack.

That creature must succeed on a Dexterity saving throw or take damage equal to two rolls of your Martial Arts die + your Dexterity modifier. The damage is the same type dealt by the attack.

Additionally, beginning at 11th level, you can now use your Deflect Attacks feature against attacks that deal any damage type, not just bludgeoning, piercing, or slashing.

#### Divine Light

You learn two cantrips of your choice from the Cleric spell list, and Wisdom is your spellcasting modifier for them.

#### Gentling Touch

In place of an attack, you can expend 1 Ki and touch a creature, and manipulate its Ki to put it to sleep. Roll your Martial Arts die five times. If the target's remaining hit points are less than or equal to the amount you rolled, it instantly falls unconscious for 10 minutes. The creature wakes up if it takes damage or another creature uses an action to wake it.

You can expend additional Ki (up to your Wisdom modifier) to roll an additional Martial Arts die for each additional Ki you spend.

#### Seeking Strike

Your spirit will guide your strikes when your body fails. When you miss with a Martial Arts attack, you can spend 1 Ki to reroll your attack. You must use the new result.

#### Slowing Strike

When you hit a creature with a melee Martial Arts attack, you can spend 1 Ki to interrupt the flow of its Ki and force the target to make a Wisdom saving throw. On a failed save, the creature suffers the effects of the *slow* spell until the start of your next turn. You don't need to concentrate on this effect.

\column

#### Stunning Strike

When you hit a creature with a melee Martial Arts attack, you can spend 1 Ki to strike with relentless force, forcing it to make a Constitution saving throw. On a failed save, the creature is stunned until the beginning of your next turn.

#### Unyielding Perseverance

You can draw upon your Ki to find success in times of great need. When you make an ability check or saving throw, you can spend Ki (up to your Wisdom modifier) adding a +1 bonus to your roll for each Ki spent. You can use this technique after you roll, but before you know the result.

### Adept Techniques (9th-level Techniques)

#### Aura Sight

You can reach out with your Ki to sense your surroundings. You gain blindsight with a range of 20 feet. Within that range, you can see anything that isn't behind total cover, even if you are blinded or in darkness. You can see invisible creatures in that range unless the creature successfully hides from you.

As you gain levels in this class the range of this blindsight increases; at 13th level (30 feet) and 18th level (60 feet).

#### Commune with Self

You have gained the ability to contact the Ki of your previous lives to gain information. As an action, you can spend 5 Ki to enter a meditative state, which lasts for 10 minutes, and consult your previous lives. At the end of the meditation, you gain information as if you had cast the *commune* spell.

#### Friend of Beast & Leaf

You can reach out and mingle your Ki with the latent Ki of the natural world around you. As an action, you can spend 5 Ki to enter a meditative state, which lasts for 10 minutes. At the end of your meditation, you gain the same information as if you had cast the *commune with nature* spell.

#### Heavenly Step

You can move along vertical surfaces, across liquids, and upside down on ceilings without falling during the move.

If you end your movement on a vertical surface, liquid, or upside down on a ceiling, you can spend 1 Ki to remain in place without falling until the start of your next turn.

{{pageNumber,auto}}
\page

#### Indomitable Spirit

You can augment your physical abilities with spiritual power. When you make a Strength (Athletics) or Dexterity (Athletics) check you can spend 1 Ki to add your Wisdom modifier (minimum of +1) to your roll. You can use this technique after you roll, but before you know if your roll succeeds or fails.

#### Mantle of Courtesy

You gain proficiency in Persuasion, and whenever you make a Charisma (Persuasion) check, you gain a bonus to your roll equal to your Wisdom modifier (minimum of +1).

#### Monastic Fortitude

As a reaction when you take damage, you can expend 2 Ki to reduce the incoming damage by an amount equal to two rolls of your Martial Arts die + your Wisdom modifier.

### Master Techniques (13th-level Techniques)

#### Armor of the Ascetic

You exude an aura of peace. At the end of a short or long rest, you gain the effects of *sanctuary*, which lasts until the start of your next short or long rest. This spell ends early as normal.

#### Banishing Strike

When you hit a creature with a melee Martial Arts attack, you can expend 3 Ki to empower your blow with legendary force, and force the target to make a Charisma saving throw. It takes additional force damage equal to three rolls of your Martial Arts die on a failure, and half as much on a success.

If this attack reduces the target to 50 hit points or fewer, it is shunted to a harmless demiplane where it is incapacitated. The creature reappears in the unoccupied space nearest to the last space it occupied at the end of your next turn.

#### Conjure Previous Life

You summon a specter of your past life to come to your aid. As an action, you can spend 5 Ki and cast *summon celestial* (defender) at 5th-level, with the changes below:

- It is a Medium creature that resembles a humanoid Monk, though it may not be the same race as you are.
- Its Radiant Mace attacks resemble unarmed strikes.
- When summoned you can infuse it with a number of Ki of your choice, and your Ki maximum is reduced by the same amount while it is summoned. It can use the infused Ki to use any Techniques you know, though it cannot use *conjure previous life* again.


\column

#### Diamond Soul

Your physical and mental discipline grant you proficiency in all saving throws. Additionally, when you make a saving throw and fail, you can expend 1 Ki to reroll it, and you must use the new roll.

#### Mystical Integrity

Your sense of self and strength of your will are unshakable. You are immune to any spell or effect that would alter your form or force you to teleport, unless you wish to be affected.

#### Tongue of Sun & Moon

You can touch the Ki of other minds and communicate with any creature that speaks a language. Creatures that speak no languages can communicate and understand simple ideas.


### Ascendant Techniques (18th-level Techniques)

#### Awaken the Third Eye

You can open your mind to the Ki that flows through all living things, allowing you to predict the actions of creatures before they happen. You can perform a 1-minute meditative ritual where you expend 8 Ki to cast *foresight*, targeting only yourself. While this effect is active, your Ki maximum is reduced by 8. You can end this effect as an action.

#### Empty Body

As a bonus action on your turn, you can spend 4 Ki to become invisible for 1 minute. While invisible in this way, you gain resistance to all damage except for force damage.

You can also spend 8 Ki to cast *astral projection*, without needing material components. When you do so, you target only yourself and can't take other creatures with you.

#### Quivering Palm

When you hit a creature with a melee Martial Arts attack, you can spend 5 Ki to infuse its soul with vibrations, that last for a number of days equal to your Monk level. While you and the creature are on the same plane of existence, you can use an action to end the vibrations and force the creature to make a Constitution saving throw. On a failed save, it is reduced to 0 hit points, and it takes 10d10 necrotic damage on a successful save.

You can only have one creature under the mystical effects of this Technique at a time. Using this Technique on another creature harmlessly ends the effect on any previous creature.

{{pageNumber,auto}}
\page

#### Word of Creation

You can draw on your intimate knowledge of the Ki that flows through all things and speak a divine word of creation. As an action, you can spend 7 Ki to cast *divine word*, using Wisdom as your spellcasting modifier.

Once you use your Ki to cast *divine word*, you must finish a short or long rest before you can cast it in this way again.

{{pageNumber,auto}}
\page

{{chapter,gradient,--color:#7c4848

## Chapter 3
# Alternate Monk Traditions
___
}}

### Alternate Sun Soul

#### Level 3 - Radiant Sun Bolt

Starting when you choose this tradition at 3rd level, you can hurl searing bolts of magical radiance.

You gain a new attack option that you can use with the Attack action. This special attack is a ranged weapon attack with a range of 30 feet. You are proficient with it, and you add your Wisdom modifier to its attack and damage rolls. Its damage is radiant, and its damage die is a d6. This die changes as you gain Monk levels, as shown in the Martial Arts column of the Monk table.

As a bonus action on each of your turns, you can spend 1 Ki to make the sepcial attack twice as a bonus action. 

When you gain the Extra Attack feature, this special attack can be used for both of the attacks you make as part of the Attack action.

#### Level 6 - Searing Arc Strike

You can overwhelm your foes with bursts of your radiant Ki.
As a bonus action, you can spend 1 Ki to force all creatures
in an adjacent 15-foot cone to make a Dexterity saving throw
against your Technique save DC.

Creatures take radiant damage equal to three rolls of your Martial Arts
Dice on a failure, and half as much damage on a success.

Additionally, all radiant damage you deal ignores resistance to radiant damage.

#### Level 11 - Luminous Burst

Your spirit brims with burning radiance. As an action, you can unleash a blast of radiant Ki in a 5-foot wide, 100-foot long line, forcing creatures in the area to make a Dexterity
saving throw against your Technique save DC. On a failure,
they take radiant damage equal to six rolls of your Martial Arts Dice. On
a success they take half as much radiant damage.

When you use this feature you can expend Ki (up to your
Wisdom modifier) to empower your Luminous Burst adding
one Martial Arts Die to its damage for each Ki spent.

You can use this feature a number of times equal to your
Wisdom modifier (a minimum of once). You regain all uses
when you complete a long rest. When you have no uses left,
you can spend 3 Ki to use Luminous Burst again.

#### Level 17 - Master of Radiance

Your radiant spirit is a shining beacon of hope for all who stand against the forces of evil. You gain the benefits below:

- So long as you are using your Unarmored Movement, you also have a flying speed equal to your movement speed.

- You become wreathed in light. You shed bright sunlight in a 30-foot radius and dim sunlight 30 feet beyond that. You can extinguish or restore the light as a bonus action.

- The radiant damage of your Radiant Sun Bolt, Searing Arc Strike, and Luminous Burst features counts as true sunlight.

- You gain resistance to necrotic damage, immunity to all radiant damage, and immunity to the blinded condition.

{{pageNumber,auto}}
\page

{{chapter,gradient,--color:#7c4848

## Chapter 3
# New Monk Traditions
___
}}

### Way of the Bow 

Monks that follow the Way of the Bow find serenity in the perfect, precise arc of an arrow's flight. You have been trained in archery on horseback, to fire a bow while blindfolded, and to pinpoint the wings of an insect in flight. As you attain peace and oneness with your arrow, no feat of archery will prove to be beyond your grasp.

#### Level 3 - Archery Fighting Style

Starting when you choose this tradition at 3rd level, you gain a +2 bonus to attack rolls you make with ranged weapons. You can't take a Fighting Style option more than once, even if you later get to choose again.

#### Level 3 - Bow Arts

At 3rd level, you gain proficiency in the longbow and shortbow, which are considered monk weapons for you. Any ranged weapon attacks you make while within 5 feet of a hostile creature do not have disadvantage. Also, you can spend Ki to use the Flurry of Arrows and Soul Arrow features.

* **Flurry of Arrows.** Immediately after you take the Attack action on your turn to make a ranged weapon attack or an unarmed strike, you can spend 1 Ki to make an additional ranged weapon attack as a bonus action.

* **Soul Arrow.** When you take the Attack action on your turn to make a ranged weapon attack, you can spend 1 Ki to fire a soul arrow for the first attack. A soul arrow is a normal arrow of its type which ignores partial cover and deals additional damage equal to your Wisdom modifier on a hit. Firing a soul arrow does not consume ammunition.

#### Level 6 - Intercepting Shot

Starting at 6th level, when an attacker you can see makes an attack against you, you can make a ranged attack roll as a reaction to interrupt the attack. If the result of your roll is greater than the result of the attacker, you can reduce the attack roll targeting you by an amount equal to your Proficiency Bonus, to a minimum of 1.

#### Level 11 - Serenity of the Wind

By 11th level, you can listen to the wind to see the otherwise invisible. As a bonus action, you can spend 1 Ki to gain blindsight with a range of 120 feet until the end of your next turn.

At 17th level, you always have blindsight out to 30 feet.

#### Level 17 - Zen Archery

At 17th level, if you make a ranged weapon attack on your turn and miss, you can immediately make another ranged weapon attack against the same target. You can only gain one additional attack during your turn with this ability.

{{pageNumber,auto}}
\page

### Way of the Chronicle 

Monks who follow the Way of the Chronicle dedicate themselves to acquiring and preserving knowledge. They believe that every story is an important piece of the great cosmic chronicle that links all beings, and universal harmony can only be achieved by making this shared knowledge available to all. To these monks, the energy of Ki is drawn from tapping into the great reservoir of shared knowledge that psychically empowers all beings.

Monasteries dedicated to the chronicle often double as public libraries that offer free courses on elementary reading and writing. The majority of chronicle monks learn the techniques used to create illuminated manuscripts in these institutions, then continue to spend their lives working and teaching at these monasteries. However, a small group of these monks are trained to produce Ki-powered scrolls called 'seals' to defend themselves as they brave the dangers of the world. 

These specialized monks are the ones tasked with recovering lost texts and transcribing the stories of people in distant lands.

#### Level 3 - Scribe's Tools

When you choose this tradition at 3rd level, you gain proficiency in the Arcana skill and with calligrapher's supplies. You also gain a special book or other repository in which to chronicle your experiences.

#### Level 3 - Sealing Strike

Beginning at 3rd level, when you hit a creature with an unarmed strike, you can spend 1 Ki to stamp the target with a mystical seal that lasts for 1 minute or until the target drops to 0 hit points.

You can have a number of active seals equal to your Proficiency Bonus at any one time.

When you hit a creature bearing a seal with a melee weapon attack, you can expend Ki to deal force damage to the target in addition to the attack's normal damage. The extra damage is equal to your Martial Arts die, plus an additional roll of your Martial Arts die for each Ki spent beyond the 1st, to a maximum of a number of Martial Arts dice equal to your Proficiency Bonus.

As an action, you can break a seal on a marked creature you can see within 60 feet of you. When you do so, the seal is destroyed and all creatures in a 20-foot-radius sphere centered on the target (including the target) must attempt a Dexterity saving throw against your Technique save DC. A creature takes a number of d8s of force damage equal to your Proficiency Bonus on a failed saving throw, or half as much damage on a successful one.

#### Level 6 - Informed Defense

At 6th level, as part of a long rest, you can spend time reviewing your chronicle and meditating on all the information you have accrued about a specific creature type.

\column

Choose a type of enemy: aberration, beast, celestial, construct, dragon, elemental, fey, fiend, giant, humanoid, monstrosity, ooze, plant, or undead. For 24 hours, the first attack roll that creatures of that type make against you in a round has disadvantage. You also have advantage on saving throws against being charmed, frightened, or possessed by them.

At the end of your next long rest, you can choose to research the same creature type or a different option from the list.

#### Level 11 - Warding Seal

At 11th level, you can create a new kind of seal. As a bonus action, you can spend 3 Ki to touch a creature and mystically mark them with a warding seal for 1 minute. (You can target yourself with this feature.)

Warding seals delivered in this way count against the total number of seals you can have active at one time (equal to your Proficiency Bonus).

When a marked creature you can see within 60 feet of you would take damage, you can use your reaction to expend 2 Ki to halve the damage the marked creature takes.

If a creature marked with a warding seal would drop to 0 hit points as a result of taking damage, the target instead drops to 1 hit point and the seal is destroyed. Alternatively, if the target is subjected to an effect that would kill it instantaneously without dealing damage, that effect is instead negated against the target, and the seal is destroyed.

#### Level 17 - Perfect Knowledge

At 17th level, you can spend 5 Ki to target one creature marked by your Sealing Strike. When you do, you are momentarily imbued with all the knowledge ever recorded about that creature. You have resistance to all damage dealt by the target for 1 minute, or until you become incapacitated.

{{pageNumber,auto}}
\page

### Way of the Dragon 

You have studied at a monastery devoted to dragonkind. Warriors trained in these places adapt their fighting styles to match the dragons they hold in such esteem. They are respected and feared by students of other traditions. Once they are trained, followers of this Way travel far and wide, rarely settling in one place for long.

#### Level 3 - Draconic Affiliation

Starting when you choose this tradition at 3rd level, you feel an affinity for one type of dragon, which you choose from the Draconic Affiliation table. You model your fighting style to match that type of dragon, and some of the features you gain from following this Way depend upon the affiliation you chose.

When you make your selection, you gain proficiency in the dragon's associated skill, and you gain resistance to the listed damage type. If you already have this skill proficiency, you double your Proficiency Bonus with that skill.

##### Draconic Affiliation  
| Dragon  | Associated Skill | Damage Type |  
|:---:|:-----------:|:---:|  
| Black / Copper | Stealth | Acid |  
| Blue / Bronze | Insight | Lightning |  
| Brass / Gold / Red | Intimidation | Fire |  
| Green | Deception | Poison |  
| Silver / White | History | Cold |  

#### Level 3 - Draconic Onslaught

At 3rd level, when you use Step of the Wind then hit with an attack, the attack deals an extra 2d6 damage of the type associated with your Draconic Affiliation.

#### Level 11 - Conquering Wyrm

Beginning at 11th level, when you take the Attack action after using Step of the Wind in the same turn, you can spend an extra 2 Ki to replace your first attack with one unarmed strike against each creature within 5 feet of the space in which you end your movement. 

On a hit, your unarmed strike deals an extra 4d6 of the type associated with your Draconic Affiliation. You can't use this feature and your Draconic Onslaught feature in the same round.

\column

#### Level 17 - Scales of the Wyrm

At 17th level, you can harden yourself against harm like the eldest of dragons. On your turn, you can spend 4 Ki to increase your Armor Class by 2, gain temporary hit points equal to your monk level, and gain immunity to the frightened condition for 10 minutes. For the duration, when you take damage of the type associated with your Draconic Affiliation, you can use your reaction to reduce the damage you take from that source to 0.

{{pageNumber,auto}}
\page

### Way of the Fist 

No warrior looks more unassuming at rest-or is more devastating in motion-than a monk dedicated to the Way of the Fist. This unique fighting style was created by the infamous Garrick Voyle, former hierarch of the Protectorate of Menoth. Voyle deciphered the lost secrets of ancient priest-kings and their guardians and melded them with the martial skills of the Idrian people to create techniques that unite a mortal body with the eternal will of Menoth.

Practiced primarily by the Allegiants of the Order of the Fist within the Protectorate, this martial art fuses faith with unwavering discipline and absolute self-control. Disdaining weapons and wearing little to no armor, allegiants are expert pugilists who can effortlessly evade rifle fire, deflect enemy blades, and counterattack enemies with a flurry of kicks and punches.

#### Level 3 - Reed in the Wind

Beginning when you choose this tradition at 3rd level, you master the Shifting Sands Stance, allowing you to weave through your foes' strikes unharmed.

If you do not move during your turn, you can enter Shifting Sands Stance as a bonus action at the end of your turn. While you are in this stance, you gain a +2 bonus to AC, your movement doesn't provoke opportunity attacks, and you can immediately move up to 15 feet plus your Unarmored Movement bonus when a creature misses you with an attack.

Shifting Sands Stance lasts until the start of your next turn, at which point you can choose to maintain it without using a bonus action. The stance ends automatically if you move during your turn, are knocked prone, or are incapacitated.

You cannot gain these benefits if you are wearing armor or wielding a shield.

#### Level 6 - Serpent Strikes

At 6th level, the kinetic force of your unarmed strikes can damage creatures far beyond the physical reach of your fists and feet. You can spend any number of Ki to increase the range of your unarmed strikes as a bonus action. For each Ki you spend, add 5 feet to the reach of your unarmed strikes. This benefit lasts until the end of your turn.

#### Level 11 - Flying Fists

At 11th level, you have advantage on Dexterity (Acrobatics) and Strength (Athletics) checks. Additionally, when you use Step of the Wind, your jump distance is quadrupled, and you can make one unarmed strike immediately after you take the Disengage or Dash action as part of that feature.

You cannot gain these benefits if you are wearing armor or wielding a shield.

#### Level 17 - Flesh of Steel

At 17th level, you gain the ability to make your flesh as hard as forged steel in response to being struck, and you can transmit the kinetic energy of the blow into your fists in order to deliver a counterstrike capable of felling a giant. When a creature hits you with a melee attack, you can spend 3 Ki to reduce the damage by half. After the attack is resolved, you can use your reaction to make an unarmed strike targeting the creature that hit you. If you do, you have advantage on the attack roll, and if you hit, the attack deals extra bludgeoning damage equal to the amount by which the creature's damage was reduced.

{{pageNumber,auto}}
\page

### Way of the Four Fists 

Through the careful manipulation of their ki, monks of the Way of the Four Fists strive to emulate the unusual fighting style of the legendary Monkey King. As they progress in their training, these monks undergo a magical transformation, slowly gaining more simian features. In combat, a master of this monastic tradition is a whirling, leaping blur of elbows, fur, and fists.

#### Level 3 - Grasp of the Monkey

When you choose this tradition at 3rd level, you undergo a permanent magical transformation, lengthening your fingers and toes, strengthening your arms and legs, and sprouting a tail. 

You gain a climbing speed equal to your movement speed, your jumping distance is doubled, and you have advantage on ability checks and saving throws made to climb, maintain your balance, and grip objects such as ledges or ropes. You can hold and manipulate objects and weapons with your hands, feet, and tail, but you can't make attacks with weapons held by your tail.

#### Level 3 - Simian Swift

Also at 3rd level, whenever you roll initiative and are not surprised, you can spend 1 Ki to move up to half your movement speed or jump into the air, and then make one unarmed strike.

#### Level 6 - Nimbus

At 6th level, you can use your bonus action to summon a cloud to ride upon. Until the beginning of your next turn, you have a fly speed equal to your movement speed. When you begin your turn, you can maintain this effect by spending 1 Ki. Otherwise, if you begin your turn and have nothing holding you aloft, you fall.

#### Level 11 - Uncanny Dodge

Starting at 11th level, when an attacker that you can see hits you with an attack, you can use your reaction to halve the attack's damage against you.

#### Level 17 - Flurry of Limbs

At 17th level, by walking on your hands and twirling erratically, you can fight with your feet as nimbly as you do your fists. You add one additional attack to your Hailstorm of Blows class feature.

{{pageNumber,auto}}
\page

### Way of the Four Truths 

Among the followers of the Old Tradition there are martial masters whose discipline leverages the awareness given by the Four Truths.

Each of the Four Truths is linked to a specific secret technique, handed down in temples to those who can see through the mere words recited in the Truth and reach its purest intrinsic meaning. This technique makes it possible to equate oneself with the cosmos, and from this awareness draw further energy.

Once training is complete, the novices leave the temple to begin a path of inner growth, becoming warriors and protectors. They are ready to face the dangers of the endless night and their spirit is guided by the deep awareness of themselves and the world that they have grown to understand after years of study and martial practice.

#### Level 3 - First Technique: Sidereal Void Touch

At 3rd level, you begin to put your studies into practice and learn to manipulate the energy of the Sempiternal who echoes through everything in the form of Ki and, with this energy, send your enemies back into the sidereal void.

When you hit a target with an attack granted by Flurry of Blows, the target must make a successful Wisdom Saving Throw or, instead of taking the appropriate damage, be exiled to a demiplane out of time and space where it is Incapacitated. At the end of its next turn, the target reappears in the precise spot where it disappeared.

Using this technique successfully results in one level of Exhaustion unless you make a successful Constitution Saving Throw with DC 10 + the target's Challenge Rating.

#### Level 6 - Second Technique: Awakening of Existence

At 6th level, if you start your turn at 0 Hit Points, you can spend any amount of Ki you choose to immediately recover 5 Hit Points for each Ki spent.

#### Level 11 - Third Technique: Tearing Up the Dark Veil

At 11th level, when you hit an Aberration, Fiend or Undead with an unarmed strike, you deal additional radiant damage equal to your martial arts dice.

#### Level 17 - Fourth Technique: Event Horizon

At 17th level, whenever you fail an Attack Roll, a Saving Throw or a Skill check, you can spend 10 Ki to automatically succeed instead.

{{pageNumber,auto}}
\page

### Way of the Gladiator 

Monks who follow the Way of the Gladiator live and die on the bloody sands of the arena in pursuit of glory, gold, and perfection of their martial art. From the dirty fighting of the pits to the flashy spectacle of grand coliseums, there are few who can match their skill with a bronze blade and wrapped fist.

#### Level 3 - Combatant's Gambit

Starting at 3rd level you specialize in an exotic signature weapon, such as a trident, net, or khopesh. The weapon can be any simple or martial melee weapon that does not have the heavy or two handed property. 

Weapons of the chosen type are considered monk weapons for you. The first attack you make each round with a monk weapon has advantage.

#### Level 6 - Flash of Bronze

Starting at 6th level your attacks with monk weapons count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.

Additionally, whenever you are able to make an unarmed attack, you may spend 1 Ki to make the attack with your monk weapon instead, if you are wielding one. This attack deals bonus damage equal to your Martial Arts die.

#### Level 11 - Superior Opponent

Beginning at 11th level you can enter a special meditation that prepares you for battle. Following a long rest, the next attack you make with a monk weapon you may treat the d20 roll as a 20, scoring a critical hit.

#### Level 17 - Glorious Spectacle

Beginning at 17th level, when another character's turn ends, you may take an immediate additional turn this round. During this turn you have advantage on all Acrobatics, Athletics, and Performance skill checks. 

You must complete a short rest before you can use this feature again.

{{pageNumber,auto}}
\page

### Way of the Ghostspeaker 

It has been said by some that the greatest loss is that the dead have the largest share of wisdom, but no way to pass it on. That sentiment is precisely what drove some monks to take their connections to the dead and to the Wailing Gray and develop them into a school and a way of living. They move and fight with the wisdom of the dead, and their movements are eerie and erratic to suit the strangeness of their knowledge source. By refining their Ki to work from both the energy of their living self and mixing it with the spirits of those who have passed, those who follow the Way of the Ghostspeaker embody the dichotomy of the living and dead, becoming fearsome and unpredictable, but also wise and calculating.

#### Level 3 - Silver Wall Style

Beginning at 3rd level, your monastic tradition has taught you to tap into the wisdom of those who have come before. Your heightened connection to the dead, and your ability to understand them, allows you to fight in a unique way. You gain the following benefits:

* Your attacks with monk weapons and unarmed strikes ignore damage resistances and immunities of undead creatures and can strike creatures in the Ethereal Plane as if they were in the Material Plane.

* When you use your Patient Defense class feature, you also conjure a wall of shimmering silver that gives you and each ally within 5 feet of you half cover until the start of your next turn.

#### Level 3 - Channel the Wailing Gray

Also beginning at 3rd level, you're able to tap into the power of the Wailing Gray to do incredible things. You learn the *sacred flame* cantrip. 

Additionally, you can spend 2 Ki to cast *misty step*, *gentle repose*, or *guiding bolt*. 

Once you reach 6th level, you can spend 4 Ki to cast *daylight* or *speak with dead*. Wisdom is your spellcasting ability for these spells.

#### Level 6 - Ten Thousand Eyes

Beginning at 6th level, ghosts whisper in your ear of what they see. You gain blindsight out to 10 feet and are immune to the blinded condition. You can spend 1 Ki to increase this blindsight to 50 feet until the end of your next turn. In addition, you can never be surprised, and these ghosts will wake you if you are unconscious and if danger is nearby.

#### Level 11 - Ten Thousand Souls

Beginning at 11th level, the spirits protect you and your allies and hinder your enemies. Your Silver Wall style improves, and a mass of spirits from the Wailing Gray encircle you in combat, forming an aura 10 feet around you. This aura produces the following effects:

* Creatures of your choice treat the area of the aura as difficult terrain.

* As an action, you can spend 4 Ki to direct the wailing spirits at a creature you can see within the aura. That creature must make a Wisdom saving throw or become frightened of you for the next minute. They can repeat the saving throw at the end of each of their turns, ending the effect on a success.

* As an action, you can spend 2 Ki to give up to six creatures of your choice within the aura 5 temporary hit points.

#### Level 17 - Silver Wall Incarnate

Beginning at 17th level, you are truly a bridge between the Wailing Gray and the living. You gain resistance to necrotic damage and you cannot die of old age. Whenever you die, your body reforms after spending 7 days within the Wailing Gray, at a random location on your plane of existence, as determined by your GM.

Additionally, you can spend 5 Ki to become a phantasmal embodiment of a living Silver Wall, where you gain the following benefits for the next minute:

* You are incorporeal, and can move through creatures and objects as if they were difficult terrain.

* You get a fly speed equal to your movement speed.

* Your unarmed strikes and attacks with monk weapons deal an additional 1d10 necrotic damage.

* If you end your turn in the space of another creature, that creature takes 3d10 psychic damage.

{{pageNumber,auto}}
\page

### Way of the Hidden Doors 

Monks of the Way of the Hidden Doors are masters of battlefield manipulation and cosmic forces. Their monastery is located high on the Eldermount, where they master their arts in frozen isolation. There they consort with extraplanar visitors. From these conferences the monks learn how to manipulate space and defend their homes against threads from beyond, be they the high heavens or darkest hells. Their techniques can transport enemies instantly between spaces, disrupting their bodies and hurling their remains through unseen holes in the fabric of reality.

#### Level 3 - Dimensional Strikes

At 3rd level, your blows can send opponents reeling through time and space. When you hit a creature with a melee weapon attack, you can use a reaction to expend 2 Ki and force the target to attempt a Charisma saving throw against your Technique save DC. On a failed saving throw, the target is magically teleported to an unoccupied space you can see within 30 ft.

At 11th level, when you use this feature you can expend an additional 2 Ki to increase the distance an affected creature can be magically teleported to 60 ft.

#### Level 6 - Hidden Doorway

At 6th level, as a bonus action you can expend 1 Ki to open a magical portal in an unoccupied space you can see within 120 ft, which lasts until the start of your next turn. While the portal is in effect and within 120 ft. of you, you can make melee weapon attacks that grant reach as though you were in the space your portal occupies.

#### Level 11 - Seven League Stride

At 11th level, you gain the ability to pass between the planes in the blink of an eye. On each of your turns, you can expend your movement to attempt to magically teleport to an unoccupied space you can see. For each 5 ft. of movement you expend in this manner, the maximum distance of this teleportation increases by 5 ft.

#### Level 17 - Worldwarden

At 17th level, you are a master of dimensional space in a 120 ft. radius centered on you. As a reaction when a creature you can see within the affected area is magically teleported, you can expend a number of Ki equal to your Proficiency Bonus to deal force damage to the creature. The target takes 1d6 force damage per Ki you expend.

{{pageNumber,auto}}
\page

### Way of the Honed Mind 

The githzerai are practiced monks who force order out of primordial chaos. They achieve this through intense personal reflection and belief, focusing their thoughts to line up perfectly with their bodies in all actions. Many githzerai monasteries across Limbo teach a specialized form of this studious practice, but to outsiders it is all known as the Way of the Honed Mind.

Few githzerai masters are willing to teach their ways to non-githzerai, but over the generations some students have risen to this lofted level. Those that study the Way of the Honed Mind blur the line between monk-like focus and psychic powers.

#### Level 3 - Mental Focus

You can use your ki to duplicate the effects of certain spells. As an action, you can spend 2 Ki to cast *blur*, *calm emotions*, *detect thoughts*, or *see invisibility*, without providing material components.

Additionally, you gain the *mage hand* cantrip if you don't already know it, and when you cast *mage hand* the effect is invisible.

#### Level 6 - Psychic Flight

You can use your mental focus to fly for a short period of time. As a bonus action you gain a flying speed equal to your walking speed for 1 minute.

You can use this feature a number of times equal to your Wisdom modifier, and you regain all uses after you complete a long rest.

#### Level 11 - Precognition Sense

Your mental focus grows to begin seeing possible future events that affect your life. When you fail a saving throw, you can immediately roll the saving throw again with advantage.

You can use this feature a number of times equal to your Wisdom modifier, and you regain all uses after you complete a long rest.

#### Level 17 - Third Eye

You have revealed your inner third eye that looks out upon the multiverse with clear vision. You gain truesight out to 60 feet.

{{pageNumber,auto}}
\page

### Way of Iron 

Adherents to the Way of Iron seek tranquility in the art of combat. Unlike other monastic traditions, the Way of Iron focuses on the use of weapons, treating them as extensions of the monk's own body. Followers of the Way of Iron are usually front-line combatants, leaving their temples behind to join in the dance of battle shoulder-to-shoulder with the rank and file soldiers. Grandmasters of the Way of Iron wield any weapon with such grace and ease that the weapons seem to have always been a part of them, the way a hand or an eye would be, and their movement and attacks are full of graceful arcs and twirling flourishes that make battle seem to be more of a dance than a conflict. Adherents to the Way of Iron train relentlessly with one another, and are among the most exceptional duelists in the world, having honed their skill against the best warriors their temples have to offer.

#### Level 3 - Roiling Storm of Iron

Starting when you choose this tradition at 3rd level, you gain proficiency in all weapons and armor, and if you are wearing armor you can use your Unarmored Defense feature if the AC it would provide is higher than your AC in armor. Furthermore, all melee weapons that do not have the heavy property are monk weapons for you.

#### Level 3 - Test of Skill

Also starting when you choose this tradition at 3rd level, you can compel other creatures to engage you in a test of martial skill. Using your action, you can choose one creature that you can see that is within 30 feet of you and that can hear and understand you. 

The creature must make a Wisdom saving throw. On a failed save, for 1 minute the creature has disadvantage on attack rolls made against creatures other than you, and must make a Wisdom saving throw each time it attempts to move to a space that is more than 30 feet away from you; if the creature fails this saving throw, it cannot move to a space more than 30 feet away from you this turn. 

This effect ends if you attack any creature other than the affected creature, if you cast a spell that targets a creature hostile to you other than the affected creature, if a creature friendly to you damages the affected creature or casts a harmful spell on it, or if you end your turn more than 30 feet away from the affected creature.

Once you use this feature, you cannot use it again until you finish a short or a long rest.

#### Level 6 - Shifting Blades

At 6th level, attacks you make with monk weapons count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.

#### Level 11 - Whirlwind of Steel

Beginning at 11th level, when you would use a bonus action to make one or more unarmed attacks (either the attack granted by your Martial Arts feature, or when spending a Ki to make a Flurry of Blows), you can make attacks with monk weapons instead.

#### Level 17 - Perfect Strike

At 17th level, you learn to combine an economy of movement with perfect angles of attack, allowing you to strike hard with precision. When you use the Attack action and make only one attack, if the attack hits you can spend 1 Ki as a bonus action to add a +25 bonus to the damage of that attack, provided that you made the attack with a monk weapon.

{{pageNumber,auto}}
\page

### Way of the Leaden Crown 

In contrast to the esoteric ideals of other monastic traditions, monks of the Way of the Leaden Crown have practical aims: the self-governance of humanoid peoples. These monks see the history of the world as a series of clashes between groups of powerful beings, where humanoids were at best collateral damage and at worst disposable pawns. 

To break this cycle of dependence and destruction, monks of the Way of the Leaden Crown master mental powers to fight back against the otherworldly powers of the multiverse and protect humanoid sovereignty. One component of this plan involves training to do battle with powerful outsiders. 

The other equally important component is ensuring that humanoid societies are prepared to overthrow those powerful outsiders already dominating them. To that end, these monks seek political positions that place them in or near decision-making roles where they can influence humanoids to fight back against arch seraphs, arch daemons, and primordials.

#### Level 3 - Subtle Hand

Starting at 3rd level, your martial arts are enhanced by a capacity for telekinetic strikes. On your turn your reach is 10 feet when you make unarmed attacks. In addition, when you make an unarmed strike this way, it deals force damage instead.

#### Level 3 - Psionic Prowess

Also at 3rd level, your psychic powers have manifested in the ability to cast certain spells. You gain the *mage hand* cantrip if you don't already know it. When you cast the spell, the spectral hand is invisible.

In addition, you can cast certain spells by expending ki. You can use an action and spend 1 Ki to cast *detect evil and good* or *protection from evil and good*. You can also use an action and spend 2 kit points to cast *hold person*, *levitate*, or *shatter*. Wisdom is your spellcasting ability for these spells and you do not need to provide material components when casting them in this way.

#### Level 6 - Unsubtle Strike

At 6th level, when you hit a creature with an unarmed strike or monk weapon, you can force it to make a Strength saving throw against your ki save DC. On a failure, you can choose to push or pull the creature 10 feet. Once you use this feature, you can't use it again until the start of your next turn.

#### Level 11 - Psychic Crush

Starting at 11th level, each time you hit a creature with an unarmed strike it gains a pressure point. A creature loses all pressure points if you give a different creature a pressure point or 1 minute after the last time it gained a pressure point. As a bonus action on your turn, you can spend 1 Ki to telekinetically crush a creature with 1 or more of your pressure points.

When you do, the creature must make a Strength saving throw against your ki save DC. On a failure, the creature takes 1d8 force damage per pressure point they have and they are restrained until the end of your next turn. On a success, they take half as much damage and aren't restrained. Either way, the creature then loses all pressure points.

#### Level 17 - Psionic Mastery

At 17th level, you have mastered the psionic disciplines necessary to defend mortals from outsiders. As an action, you can spend 5 Ki to cast *dispel evil and good*, *hold monster*, *telekinesis*, or *wall of force*. Wisdom is your spellcasting ability for these spells and you do not need to provide material components when casting them in this way.

{{pageNumber,auto}}
\page

### Way of Mundanity 

There are those who study the arcane as a means to change the world around them. There is a certain arrogance in that concept, so in order to maintain balance there exists a group dedicated to preservation of the natural and the mundane. Monks who follow the Way of Mundanity use both the study of magic and the mastery of their own internal energies to battle those who use the arcane.

#### Level 3 - Arcane Detection

You gain proficiency in the Arcana skill if you do not already have it. Additionally, you can spend 1 Ki to cast the *detect magic* spell as an action.

#### Level 6 - Spell Deflection

You can use your Deflect Attack ability to reduce the damage you take from magical sources. When you take any magical damage that isn't bludgeoning, piercing, or slashing, you can spend 1 Ki to reduce the damage taken as you would with Deflect Attack. 

If you reduce the damage to 0, you can choose to cause your next melee attack to deal additional force damage equal to one roll of your Martial Arts die.

#### Level 6 - Suppressing Ki

You've learned to use your ki to disrupt the magical nature of other creatures or objects. You can spend 3 Ki to cast *counterspell*, *dispel magic*, *nondetection*, or *remove curse*, using Wisdom as your spellcasting modifier.

Beginning at 17th level, you can spend 8 Ki to cast *antimagic field*. When you cast spells in this way, you ignore material components.

#### Level 11 - Magical Rending

When you hit a creature that has the Magic Resistance trait with an unarmed strike, you can expend 2 Ki to nullify that trait until the end of your next turn.

#### Level 17 - Coalescence

When you make a saving throw against a spell or other magical effect, you can use your reaction to gain advantage on the saving throw and resistance to damage from the spell. If the effect is a spell, you also regain a number of Ki equal to the level of the spell cast.

Once you have used this ability, you may not do so again until you finish a long rest.

{{pageNumber,auto}}
\page

### Way of Pain 

Most people seek to avoid it. Some try to ignore it. And others choose to embrace it, not out of perversion or because they enjoy it, but simply because they understand that it is inevitable and perhaps usable. According to certain sages, pain is even one of the components of ki. Monks of the Way of Pain look upon physical suffering as an inexhaustible resource, particularly on the battlefield, and learn to receive it to fuel their martial feats.

#### Level 3 - Gratitude

Starting when you choose this tradition at 3rd level, you learn to thank your opponents in accordance with the tenets of the Way of Pain. When a creature makes you lose a number of hit points (not temporary hit points) at least equal to your monk level through a weapon attack, you can immediately use your reaction to make a melee attack against any creature within range. 

When you reach 6th level, you can also use this feature when you lose hit points because of a spell, whether the spell targeted you directly or included you in an area effect. In this case, the damage you deal through your attack is of the same type as the damage you just took. 

Beginning at 11th level, you can also move up to your speed as part of your reaction, before or after attacking.

Moreover, beginning at 3rd level, you can expend 1 ki point to ignore the effects of all your exhaustion levels and penalties until the start of your next turn. This costs you no action.

#### Level 6 - Sublimation

Starting at 6th level, as a reaction, when you take damage from any source, you can gain a number of Ki equal to one tenth of the hit points (not temporary hit points) lost, rounded down.

#### Level 11 - Abnegation

Starting at 11th level, pain focuses your senses, sharpens your reflexes, and stirs your fighting spirit. As long as your current hit points are less than or equal to half your maximum hit points, you have advantage on your weapon attacks (which includes your unarmed strikes) and a +2 bonus to your saving throws.

#### Level 17 - The Last Dance

When you reach 17th level, being at death's door liberates within you a whirlwind of death. When you are reduced to 0 hit points but not killed outright, you can spend 3 Ki to drop to 1 hit point instead. If you do so, until the end of your next turn, all your successful weapon attacks (which includes your unarmed strikes) are considered critical hits.

{{pageNumber,auto}}
\page

### Way of Pride 

Monks of the Way of Pride value themselves above all others. These monks focus on mastering their form, ego, and destructive power. They use their monastic traditions publicly, with the intention of gaining the respect and admiration of "lesser beings."

The prideful traditions of this order include adorning oneself with jewelry, hiding their scars from prying eyes, and commanding respect from those that would oppose them.

#### Level 3 - Tall Tales

At 3rd level, you have gained a knack for telling embellished tales of your past achievements. You gain proficiency in your choice of one of the following skills: Deception, Intimidation, Performance, and Persuasion.

#### Level 3 - Bruised Ego

At 3rd level, your ego bolsters your vitality, strengthening as you fight to prove your vigor. Whenever you expend a Ki, you can also choose to gain temporary hit points equal to your Proficiency Bonus. While your current hit points are equal to or less than half your maximum hit points, you can also add your Wisdom modifier to the amount of temporary hit points gained.

#### Level 3 - Assertive Attacker

At 3rd level, while your current hit points are equal to or less than half your maximum hit points, your Martial Arts die counts as being one higher than normal. For example, if you are a 6th-level monk, your Martial Arts die goes from a d6 to a d8. At 17th level and higher you Martial Arts die goes from a d10 to a d12.

#### Level 6 - Irrational Retaliation

Beginning at 6th level, damage dealt to you is damage dealt to your pride, and that is something you simply cannot allow. Whenever a creature deals damage to you, you can use your reaction to expend 2 Ki to target that creature. Until the end of your next turn, all attacks you make against the target creature have advantage.

#### Level 6 - Redoubled Efforts

Additionally at 6th level, while your current hit points are equal to or less than half your maximum hit points, you can roll one additional Martial Arts die when determining the extra damage dealt by a critical hit.

#### Level 11 - Ever Prideful

At 11th level, your muscle memory takes over. When your hit points are reduced to 0 you are not knocked unconscious, but you must still make death saving throws and suffer all the normal effects of taking damage while at 0 hit points. At the beginning of each of your turns whilst in this state you can spend 1 Ki to remain in this state. If you do not spend a Ki at the start of your turn whilst at 0 hit points you suffer all the normal effects of being reduced to 0 hit points.

The following also apply:

* You cannot speak.

* You cannot cast or concentrate on spells.

* Critical hits against you in this state count as one failed death saving throw instead of 2.

#### Level 17 - Egotistical

Beginning at 17th level, you gain the benefits of this class' features that state "while your current hit points are equal to or less than half your maximum hit points" whenever you are below your hit point maximum instead, provided you have been damaged by a hostile creature within the past minute.

{{pageNumber,auto}}
\page

### Way of the Silver Lantern 

On the Astral Plane, the monks of the Silver Lantern have partnered with astral devas on a quest of assistance. They do their best to monitor traffic in the Silver Void, and they step in to help travelers who find themselves lost or under attack by one of the many threats that wait in the Astral Sea. The guiding principle of the Silver Lantern is to help others whenever possible, and there are those that have left the Astral Plane and sought to bring their mission to the rest of the multiverse.

Some connect up with a group of adventurers, acting as a guardian angel in times of strife, while others wander the planes in search of those in need of help. Wherever they go, these monks carry the light of the Silver Lantern and all that it represents in their bodies, minds, and spirits.

#### Level 3 - Silver Lantern Bearer

You can draw upon your training to aid others in their struggles. You can spend 1 Ki to take the Help action as a reaction with a range of 30 feet. In addition, you gain the *guidance* cantrip if you don't already know it.

#### Level 6 - Silver Spirit

The power of the Silver Lantern flows through you and protects you from harm for a short period. You can use a bonus action to gain resistance to all damage until the start of your next turn.

You must complete a long rest before you can use this feature again.

#### Level 11 - Light of Purity

You can let your silver light shine upon those close to you to invigorate and renew them. You can cast the *beacon of hope* spell without having to concentrate on it for its duration. 

You must complete a short or long rest before you can use this ability again.

#### Level 17 - Silver Beacon

The light of the Silver Lantern burns bright within your body and you can use it to become a beacon of purity and hope. As an action, silver light flares from your body for 1 minute, during which you gain the following properties:

* Silver light equal to the *daylight* spell shoots out centered on you.

* You and all friendly creatures you choose within 60 feet are affected by the *bless* spell.

* You and all friendly creatures you choose within 60 feet are affected by the *aid* spell. This effect lasts for 8 hours.

You must finish a long rest before you can use this feature again.

{{pageNumber,auto}}
\page

### Way of the Soulwinds 

The Soulwinds represent not just a force of nature in the world, but an entire belief system and way of life. A small group of monks have dedicated themselves entirely to the Soulwinds, modeling every aspect of the lives, in peace and war, around their tenets. Through this dedication and commitment, they have developed the power of the Soulwinds into a lifestyle and a powerful force that they can channel to accomplish amazing things.

This is not a faith in the strictest sense, but a set of principles that espouse ideas of sacrifice, selflessness, and finding joy in the small moments of life, as well as in the raw power of nature. There are no doctrines or dogma to the, but it explains that the Soulwinds are a fundamental aspect of creation, and that these forces, though powerful beyond comprehension, do not possess any structure or order - but show perfect balance in their measure.

#### Level 3 - Soulwind Stances

Starting when you choose this tradition at 3rd level, you learn the stances of the Soulwinds. As a bonus action on your turn, you can enter a Soulwind Stance, gaining its benefits until you choose to end it, which takes no action and can be done at any time. You can only have one Soulwind Stance active at a time. You can choose to change Soulwind Stances on your turn as a bonus action.

Each Soulwind Stance has unique benefits, and they each get improvements as you gain levels in this class.

* **Flamewind Stance.** Both your blows and movements are as swift and fervorous as the Flamewind. While in this stance, you can choose to have your monk weapons and unarmed strikes deal fire damage instead of their normal weapon damage. Additionally, as part of the Attack action while in this stance before you make your attacks, you can move up to your speed towards a creature you can see.

* **Steelwind Stance.** Your strikes are infused with power blessed by the Steelwind. While in this stance, attacks with your monk weapons and unarmed strikes also push the target 5 feet on a hit. In addition while in this stance, you have advantage on saving throws and ability checks made to resist moving against your will.

* **Floodwind Stance.** Your stance and movements channel the mercy of the Floodwind. As an action while in this stance, you can spend any number of Ki up to your monk level and touch another creature within 5 feet of you. That creature gains 1d4 temporary hit points for each Ki spent this way.

* **Stonewind Stance.** Your body is imbued with the vitality of the Stonewind. While in this stance, you have resistance to necrotic damage, and if another creature would normally roll one or more dice to restore your hit points with a spell, they instead use the highest number possible for each die.

#### Level 6 - Improved Soulwind Stances

At 6th level, your skill with your Soulwind Stances improves, and you get the following enhancements to your Soulwind Stances:

* **Flamewind Stance.** The Flamewind burns away impurities. While in the Flamewind Stance, you can spend 2 Ki to cast the spell lesser restoration.

* **Steelwind Stance.** The Steelwind surrounds your allies to protect them from harm. While in the Steelwind Stance, when another creature within 30 feet of you is hit with an attack, you can spend 2 Ki as a reaction to give them a +4 bonus to AC against that attack.

* **Floodwind Stance.** The Floodwind is mercurial, and its path pays no heed to the desires of mortals. As an action while in the Floodwind Stance, you can spend 3 Ki to attempt to fill the lungs (or their equivalent) of a creature within 5 feet of you with magical water. The target must succeed on a Constitution saving throw or immediately begin to suffocate. The target can spend an action on its turn coughing up the water to end this effect. This ability has no effect on creatures that do not need to breathe air.

* **Stonewind Stance.** The Stonewind judges all with life or death. When you hit a creature with a monk weapon or an unarmed strike while in the Stonewind Stance, you can spend any number of Ki, to a maximum of 3. The creature also takes 1d6 necrotic damage per Ki spent this way.

#### Level 11 - Soulwind Stance Mastery

At 11th level, you've begun to master the desires of the enigmatic Soulwinds, and guided by their will, you get the following improvements to your Soulwind Stances:

* **Flamewind Stance.** The Flamewind wreaks unrestrained destruction, if given the proper guidance. While in the Flamewind Stance, you can spend 3 Ki to cast the spell *fireball* without providing material components.

* **Steelwind Stance.** The Steelwind hardens around your body and weapons. While in the Steelwind Stance, your unarmed strikes and monk weapons deal additional damage equal to your Wisdom modifier.

* **Floodwind Stance.** As inevitable as rivers converging, the Floodwind unifies all those who follow its path. While in the Floodwind Stance, you can spend 1 Ki to cast the *bless* spell without providing material components. Targets of this spell are also given Floodwinds in their lungs (or their equivalent), which let them hold their breath for the duration of the spell. You can spend additional Ki to cast *bless* as a higher level spell. Each additional Ki you spend increases the spell's level by 1, to a maximum of 9th level.

* **Stonewind Stance.** The Stonewind guides even the destinies that lead to doom. While in the Stonewind Stance, you can spend 5 Ki to cast the *blight* spell.

{{pageNumber,auto}}
\page

#### Level 17 - Tempest of the Soulwinds

At 17th level, the Soulwinds are yours to command, and you get the following improvements to your Soulwind Stances:

* **Flamewind Stance:** The Flamewind burns away every scar, every ambition, every ounce of tenacity. While in the Flamewind Stance, you can spend 6 Ki to cast the *feeblemind* spell without providing material components, but the creature takes no damage from the spell, and only its Charisma score is reduced on a failed save. The target can repeat the saving throw at the end of each of its turns to end the spell's effects.

* **Steelwind Stance:** With a swift motion, the Steelwind crushes your foe. As an action while in the Steelwind Stance, you can spend 3 Ki and bring down the weight of the Steelwind on a creature that you can see within 30 feet. The target must succeed on a Strength saving throw or take 6d6 bludgeoning damage and be paralyzed until the end of your next turn.

* **Floodwind Stance:** The Floodwind will grind a mountain to dust, given enough time. When you hit a creature with a monk weapon or an unarmed strike while in the Floodwind Stance, you can spend 3 Ki to attempt to also destroy one piece of equipment they are wearing or holding. The target must make a Dexterity saving throw. On a failed save, that piece of equipment is turned to dust, as if affected by the *disintegrate* spell.

* **Stonewind Stance:** The Stonewind causes strange wild flowers and plant life to bloom unrestrained at your feet. While in this stance, you can spend 5 Ki to cast the *mass cure wounds* spell, and you can also spend 2 Ki to cast the *plant growth* spell.

{{pageNumber,auto}}
\page

### Way of Street Fighting 

The Way of Street Fighting is an urban discipline founded on necessity, whose blindingly fast, unique brand of martial arts has been honed and perfected in back-alley brawls and tournaments alike. Monks who adopt this relatively new technique place comparatively little value on spiritual enlightenment and karmic balance; the thrill of split-second timing, rapid combos, and decisive knock-outs drive them to become the best combatants in the world.

#### Level 3 - Combo

Starting when you choose this tradition at 3rd level, you gain bonuses for successful consecutive hits on a single target. On your turn, you gain a +1 bonus to the damage rolls of your unarmed strikes for each hit that you have made on that target on your turn, to a maximum of your Proficiency Bonus. This bonus resets to 0 if you take damage on your turn.

#### Level 6 - Iron Fist

By 6th level, your unarmed strikes and monk weapons ignore the damage threshold of objects and deal maximum damage to them.

#### Level 11 - Special Moves

At 11th level, you have memorized and mastered patterns of discrete movements that unlock your ki, allowing you to use the following special moves:

* **Ki Blast.** You can channel your ki into a blast of energy. As an action, you can expend 2 Ki to make a ranged spell attack (using your Wisdom modifier + your Proficiency Bonus) against a creature you can see within 120 feet of you. On a hit, the target takes force damage equal to 6d8 + half your monk level.

* **Uppercut.** Immediately after you take the Attack action on your turn, you can spend 1 Ki to perform an uppercut. Make an unarmed strike as a bonus action. On a hit, if the target is Large or smaller and doesn't have all of its hit points, it takes damage as normal and is then knocked off its feet and falls prone.

* **Whirlwind Strike.** Whenever you make a melee attack on your turn against a creature you can see, you can spend 1 Ki to lunge up to 15 feet toward your target before making the attack. This movement doesn't provoke opportunity attacks. You can perform this movement even if it causes you to travel through the air, though you fall after making the attack if you do not land on solid ground.

#### Level 17 - K.O.

Beginning at 17th level, you can spend 3 Ki to channel your ki into a single strike, knocking a foe unconscious. As an action, make an unarmed strike against a creature within your reach. On a hit, the target takes damage as normal. If the creature has 100 or fewer hit points after you deal damage, it is reduced to 0 hit points, is knocked unconscious, and becomes stable.

Once you use this ability, you can't use it again until you finish a long rest.

{{pageNumber,auto}}
\page

### Way of the Tattooed Temple 

Some monks treat their bodies as temples and adorn them with vivid art honoring their values. Practitioners of the Way of the Tattooed Temple ink their bodies as they reach milestones in their personal journey, infusing some of these tattoos with mystical energy that evokes magical properties from the ink. Although some look askance at the appearance of these monks, none doubt their supernatural power.

#### Level 3 - Inked

Starting at 3rd level, you gain proficiency with tattooist's tools. In addition, choose one mystical tattoo and gain it. Choose and gain another mystical tattoo at 6th and 11th level.

When you gain a level in this class, you can choose one of your mystical tattoos and replace it with another mystical tattoo.

#### Level 3 - Mystical Tattoos

When you gain a mystical tattoo, you tattoo yourself or instruct another to tattoo you. Activating your own enlightened potential with the pain and creativity of the tattooing, the ink is imbued with magical powers and becomes a mystical tattoo.

* **Crane.** You can fly as part of your movement on your turn. At the end of each of your turns, if you are not on the ground you fall to the ground taking damage as normal. You can use a reaction when you are falling and spend 1 Ki to cast the *feather fall* spell without material components.

* **Eye.** You have advantage on saving throws against illusion effects. As a bonus action, you can spend 2 Ki to gain blindsight to a range of 30 feet for 1 minute.

* **Mandala.** Your Ki maximum is increased by 1. At 11th level this bonus increases to 2. When you are reduced to 0 hit points, you can spend 1 Ki to automatically stabilize yourself before falling unconscious.

* **Mask.** You can spend 2 Ki to cast *disguise self*. When you use this feature to cast the spell, its duration becomes 8 hours.

* **Monkey.** When you are grappling, you can add your Dexterity modifier, instead of your Strength modifier, to your Athletics ability check. When you take the Attack action, you can spend 1 Ki to make an additional attack as part of that action. This additional attack can only be used to grapple.

* **Mountain.** You gain a +1 bonus to AC when you are unarmed, unarmored, and have no shield. When you take bludgeoning, piercing, or slashing damage, you can use your reaction and spend 1 Ki to gain resistance against the triggering damage.

* **Snake.** You gain resistance to poison damage. When you deal damage with an unarmed strike, you can spend 1 Ki to deal an additional 1d8 poison damage.

* **Spider.** You have a climbing speed of 30 feet. You can spend 3 Ki to cast the *web* spell without material components.

* **Sun.** You gain resistance to radiant damage. Additionally, when you take damage, you can use your reaction and spend 1 Ki to cause light to erupt from your body. When you do, each creature within 5 feet of you must succeed on a Constitution saving throw or be blinded until the end of your next turn.

* **Tiger.** You can choose to deal slashing damage, instead of bludgeoning damage, with your unarmed strikes. When you deal slashing damage with your unarmed strike, you can spend 1 Ki to deal an extra 1d10 damage.

* **Tree.** You have advantage on saving throws against being knocked prone or being moved against your will. You can spend 2 Ki to cast the *entangle* spell.

* **Tsunami.** You can breathe air and water and gain a swimming speed of 30 feet. Additionally, when you hit a creature with an unarmed strike, you can spend 1 Ki to attempt to knock the creature down. When you do, the creature must succeed on a Strength saving throw or fall prone.

#### Level 17 - Living Canvas

Starting at 17th level, when you complete a long rest you can choose a mystical tattoo. You have this tattoo until you use this feature again.

{{pageNumber,auto}}