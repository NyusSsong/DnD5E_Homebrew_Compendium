### Purpose of the Subsystem

This subsystem seeks to harmonize the economic and magical progression of D&D 5E, maintaining a coherent curve and an economy that feels meaningful. It introduces a structure based on three pillars:

1. **Wealth by Level (WBL):** Defines the average total gold a character should have at each level.
2. **Item Price:** Calculated as a percentage of WBL (in this case, 35%). This guarantees that a relevant item represents a significant investment.
3. **Access Level Restriction:** Prevents players from acquiring overly powerful items too early.

### Economic Structure

Each level provides, or should provide, an expected amount of gold that accumulates progressively. The price of an item of the character's level equals 35% of the accumulated wealth up to that level. For example:

- At 4th level, with 1,300 gp accumulated, a +1 weapon costs 455 gp (plus the base cost of the weapon).
- At 10th level, with 13,600 gp accumulated, a +2 weapon costs 4,760 gp.

The goal is for items to scale with the character's power and their wealth.

### Access Level Restriction

To prevent players from jumping ahead of the curve through aggressive saving or trading, the following rule applies:

**A character can only buy items whose level is less than or equal to their character level + their Proficiency Bonus.**

This generates the following progression:

- **Levels 1-4 (PB +2):** access to items between levels 1 and 6.
- **Levels 5-8 (PB +3):** access to items between levels 8 and 11.
- **Levels 9-12 (PB +4):** access to items between levels 13 and 16.
- **Levels 13-16 (PB +5):** access to items between levels 17 and 20.

This way, players can aspire to items slightly above their character level without excessively breaking the progression, rewarding planning without disproportionate power jumps.

### Magic Item Pricing Table

| Level | Gold at Level | WBL | Price | Examples |
|:---:|:---:|:---:|:---:|:---|
| 1 | 50 | 50 | 18 | |
| 2 | 150 | 200 | 70 | |
| 3 | 500 | 700 | 245 | |
| 4 | 600 | 1,300 | 455 | +1 Weapon |
| 5 | 800 | 2,100 | 735 | +1 Armor/Shield<br>Cloak of Protection<br>Ring of Protection |
| 6 | 1,000 | 3,100 | 1,085 | |
| 7 | 1,500 | 4,600 | 1,610 | |
| 8 | 2,000 | 6,600 | 2,310 | |
| 9 | 3,000 | 9,600 | 3,360 | |
| 10 | 4,000 | 13,600 | 4,760 | +2 Weapon |
| 11 | 5,000 | 18,600 | 6,510 | +2 Armor/Shield |
| 12 | 6,000 | 24,600 | 8,610 | |
| 13 | 8,000 | 32,600 | 11,410 | |
| 14 | 10,000 | 42,600 | 14,910 | |
| 15 | 15,000 | 57,600 | 20,160 | |
| 16 | 20,000 | 77,600 | 27,160 | +3 Weapon |
| 17 | 30,000 | 107,600 | 37,660 | |
| 18 | 40,000 | 147,600 | 51,660 | +3 Armor/Shield |
| 19 | 50,000 | 197,600 | 69,160 | |
| 20 | 60,000 | 257,600 | 90,160 | |

### Item Level Modifiers

The following guidelines establish a series of modifiers that can be applied to determine how certain effects change an item's level.

First, determine if the item has passive or active functionalities (or both). For items with **passive functionalities**, establish the power axis (2-6), where the accessibility axis (how easy it is to exploit) is absorbed by the power axis (what the item does):

- **Minimal:** +1d4 damage, +1 to a roll -> +2
- **Low:** +1d6 damage, specific resistance, +1 AC -> +3
- **Medium:** +1d8 or +1d10 damage, broad resistance, situational advantage -> +4
- **High:** +2d6 damage, control effects, resource recovery, consistent advantage -> +5
- **Very High:** permanent unconditional advantage, immunities, area of effect -> +6

For items with **only active functionalities**, establish the power axis (what the item does):

- **Minimal:** +1d4 damage, +1 to a roll -> +1
- **Low:** +1d6 damage, specific resistance, +1 AC -> +2
- **Medium:** +2dX damage, broad resistance, situational advantage -> +3
- **High:** control effects, resource recovery, consistent advantage -> +4
- **Very High:** permanent unconditional advantage, immunities, area of effect -> +5

Second, establish the **accessibility axis** (how easy it is to use):

- **Very Limited:** 1/long rest, full action -> +1
- **Limited:** fixed uses, bonus action, reactions with conditions -> +2
- **Moderate:** charges with recharge, unconditional reaction -> +3
- **High:** unlimited with an activation condition -> +4
- **Total:** permanent passive with no condition or activation -> +5

Third, establish the **range axis** (who it affects):

- **Personal:** only the wielder -> +0
- **Short:** affects nearby creatures or an ally within 30 ft -> +1
- **Broad:** area, multiple creatures, or allies at 60 ft or more -> +2

Fourth, determine if the item requires **attunement**:

- **No attunement required** -> +0
- **Requires attunement** -> -1

Fifth, determine if the item is a **consumable**:

- **Not a consumable** -> +0
- **Is a consumable** -> -3

Lastly, the DM uses their judgment to apply any power modification that cannot be contemplated in the existing axes. This modification can reduce or increase the item's level by up to -2/+2 levels.

### Minimum Level Differentiation

When a magic item shares a base characteristic with a previously cataloged default item (such as a +1 bonus to attack and damage from a +1 weapon), there must be a minimum level differentiation to reflect that it is a distinct item with additional capabilities, regardless of whether the calculated modifier for those capabilities is +0.

In other words, if a +1 weapon that also deals +1d4 fire damage gets the same score as a +1 weapon with no additional effects, both items would end up at the same level, which doesn't reflect their real difference in value. To avoid this collision, any item that shares a base with an item already defined in the table and adds *any* additional effect must be raised by at least one level compared to that base item, regardless of the score obtained.

This minimum of +1 acts as an identity separator between items, ensuring the table reflects a coherent hierarchy where each item occupies its own space.
