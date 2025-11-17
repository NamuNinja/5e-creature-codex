// Additional SRD 5.1 Spells - OGL Compliant
// This file adds ~160 missing spells from the Systems Reference Document 5.1
// Append this to window.spellsData or merge on load

// Merge function to combine with existing spells
if (typeof window.spellsData === 'undefined') {
    window.spellsData = {};
}

// Additional spells from SRD 5.1
const additionalSpells = {
    // Additional Cantrips
    "true strike": {
        name: "True Strike",
        level: 0,
        school: "Divination",
        castingTime: "1 action",
        range: "30 feet",
        components: "S",
        duration: "Concentration, up to 1 round",
        description: "You extend your hand and point a finger at a target in range. Your magic grants you a brief insight into the target's defenses. On your next turn, you gain advantage on your first attack roll against the target, provided that this spell hasn't ended."
    },

    "shocking grasp": {
        name: "Shocking Grasp",
        level: 0,
        school: "Evocation",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S",
        duration: "Instantaneous",
        description: "Lightning springs from your hand to deliver a shock to a creature you try to touch. Make a melee spell attack against the target. You have advantage on the attack roll if the target is wearing armor made of metal. On a hit, the target takes 1d8 lightning damage, and it can't take reactions until the start of its next turn.",
        higherLevels: "The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
    },

    "friends": {
        name: "Friends",
        level: 0,
        school: "Enchantment",
        castingTime: "1 action",
        range: "Self",
        components: "S, M (a small amount of makeup applied to the face as this spell is cast)",
        duration: "Concentration, up to 1 minute",
        description: "For the duration, you have advantage on all Charisma checks directed at one creature of your choice that isn't hostile toward you. When the spell ends, the creature realizes that you used magic to influence its mood and becomes hostile toward you. A creature prone to violence might attack you. Another creature might seek retribution in other ways (at the GM's discretion), depending on the nature of your interaction with it."
    },

    // Level 1 Spells
    "alarm": {
        name: "Alarm",
        level: 1,
        school: "Abjuration",
        castingTime: "1 minute",
        range: "30 feet",
        components: "V, S, M (a tiny bell and a piece of fine silver wire)",
        duration: "8 hours",
        description: "You set an alarm against unwanted intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot cube. Until the spell ends, an alarm alerts you whenever a Tiny or larger creature touches or enters the warded area. When you cast the spell, you can designate creatures that won't set off the alarm. You also choose whether the alarm is mental or audible. A mental alarm alerts you with a ping in your mind if you are within 1 mile of the warded area. This ping awakens you if you are sleeping. An audible alarm produces the sound of a hand bell for 10 seconds within 60 feet."
    },

    "animal friendship": {
        name: "Animal Friendship",
        level: 1,
        school: "Enchantment",
        castingTime: "1 action",
        range: "30 feet",
        components: "V, S, M (a morsel of food)",
        duration: "24 hours",
        description: "This spell lets you convince a beast that you mean it no harm. Choose a beast that you can see within range. It must see and hear you. If the beast's Intelligence is 4 or higher, the spell fails. Otherwise, the beast must succeed on a Wisdom saving throw or be charmed by you for the spell's duration. If you or one of your companions harms the target, the spell ends.",
        higherLevels: "When you cast this spell using a spell slot of 2nd level or higher, you can affect one additional beast for each slot level above 1st."
    },

    "fog cloud": {
        name: "Fog Cloud",
        level: 1,
        school: "Conjuration",
        castingTime: "1 action",
        range: "120 feet",
        components: "V, S",
        duration: "Concentration, up to 1 hour",
        description: "You create a 20-foot-radius sphere of fog centered on a point within range. The sphere spreads around corners, and its area is heavily obscured. It lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it.",
        higherLevels: "When you cast this spell using a spell slot of 2nd level or higher, the radius of the fog increases by 20 feet for each slot level above 1st."
    },

    "goodberry": {
        name: "Goodberry",
        level: 1,
        school: "Transmutation",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S, M (a sprig of mistletoe)",
        duration: "Instantaneous",
        description: "Up to ten berries appear in your hand and are infused with magic for the duration. A creature can use its action to eat one berry. Eating a berry restores 1 hit point, and the berry provides enough nourishment to sustain a creature for one day. The berries lose their potency if they have not been consumed within 24 hours of the casting of this spell."
    },

    "grease": {
        name: "Grease",
        level: 1,
        school: "Conjuration",
        castingTime: "1 action",
        range: "60 feet",
        components: "V, S, M (a bit of pork rind or butter)",
        duration: "1 minute",
        description: "Slick grease covers the ground in a 10-foot square centered on a point within range and turns it into difficult terrain for the duration. When the grease appears, each creature standing in its area must succeed on a Dexterity saving throw or fall prone. A creature that enters the area or ends its turn there must also succeed on a Dexterity saving throw or fall prone."
    },

    "illusory script": {
        name: "Illusory Script",
        level: 1,
        school: "Illusion",
        castingTime: "1 minute",
        range: "Touch",
        components: "S, M (a lead-based ink worth at least 10 gp, which the spell consumes)",
        duration: "10 days",
        description: "You write on parchment, paper, or some other suitable writing material and imbue it with a potent illusion that lasts for the duration. To you and any creatures you designate when you cast the spell, the writing appears normal, written in your hand, and conveys whatever meaning you intended when you wrote the text. To all others, the writing appears as if it were written in an unknown or magical script that is unintelligible. Alternatively, you can cause the writing to appear to be an entirely different message, written in a different hand and language, though the language must be one you know."
    },

    "longstrider": {
        name: "Longstrider",
        level: 1,
        school: "Transmutation",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S, M (a pinch of dirt)",
        duration: "1 hour",
        description: "You touch a creature. The target's speed increases by 10 feet until the spell ends.",
        higherLevels: "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st."
    },

    "purify food and drink": {
        name: "Purify Food and Drink",
        level: 1,
        school: "Transmutation",
        castingTime: "1 action",
        range: "10 feet",
        components: "V, S",
        duration: "Instantaneous",
        description: "All nonmagical food and drink within a 5-foot-radius sphere centered on a point of your choice within range is purified and rendered free of poison and disease."
    },

    "speak with animals": {
        name: "Speak with Animals",
        level: 1,
        school: "Divination",
        castingTime: "1 action",
        range: "Self",
        components: "V, S",
        duration: "10 minutes",
        description: "You gain the ability to comprehend and verbally communicate with beasts for the duration. The knowledge and awareness of many beasts is limited by their intelligence, but at minimum, beasts can give you information about nearby locations and monsters, including whatever they can perceive or have perceived within the past day. You might be able to persuade a beast to perform a small favor for you, at the GM's discretion."
    },

    // Level 2 Spells
    "alter self": {
        name: "Alter Self",
        level: 2,
        school: "Transmutation",
        castingTime: "1 action",
        range: "Self",
        components: "V, S",
        duration: "Concentration, up to 1 hour",
        description: "You assume a different form. When you cast the spell, choose one of the following options, the effects of which last for the duration of the spell. While the spell lasts, you can end one option as an action to gain the benefits of a different one. Aquatic Adaptation. You adapt your body to an aquatic environment, sprouting gills and growing webbing between your fingers. You can breathe underwater and gain a swimming speed equal to your walking speed. Change Appearance. You transform your appearance. Natural Weapons. You grow claws, fangs, spines, horns, or a different natural weapon of your choice."
    },

    "animal messenger": {
        name: "Animal Messenger",
        level: 2,
        school: "Enchantment",
        castingTime: "1 action",
        range: "30 feet",
        components: "V, S, M (a morsel of food)",
        duration: "24 hours",
        description: "By means of this spell, you use an animal to deliver a message. Choose a Tiny beast you can see within range, such as a squirrel, a blue jay, or a bat. You specify a location, which you must have visited, and a recipient who matches a general description, such as 'a man or woman dressed in the uniform of the town guard' or 'a red-haired dwarf wearing a pointed hat.' You also speak a message of up to twenty-five words. The target beast travels for the duration of the spell toward the specified location, covering about 50 miles per 24 hours."
    },

    "arcane lock": {
        name: "Arcane Lock",
        level: 2,
        school: "Abjuration",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S, M (gold dust worth at least 25 gp, which the spell consumes)",
        duration: "Until dispelled",
        description: "You touch a closed door, window, gate, chest, or other entryway, and it becomes locked for the duration. You and the creatures you designate when you cast this spell can open the object normally. You can also set a password that, when spoken within 5 feet of the object, suppresses this spell for 1 minute. Otherwise, it is impassable until it is broken or the spell is dispelled or suppressed. Casting knock on the object suppresses arcane lock for 10 minutes."
    },

    "barkskin": {
        name: "Barkskin",
        level: 2,
        school: "Transmutation",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S, M (a handful of oak bark)",
        duration: "Concentration, up to 1 hour",
        description: "You touch a willing creature. Until the spell ends, the target's skin has a rough, bark-like appearance, and the target's AC can't be less than 16, regardless of what kind of armor it is wearing."
    },

    "beast sense": {
        name: "Beast Sense",
        level: 2,
        school: "Divination",
        castingTime: "1 action",
        range: "Touch",
        components: "S",
        duration: "Concentration, up to 1 hour",
        description: "You touch a willing beast. For the duration of the spell, you can use your action to see through the beast's eyes and hear what it hears, and continue to do so until you use your action to return to your normal senses. While perceiving through the beast's senses, you gain the benefits of any special senses possessed by that creature, though you are blinded and deafened to your own surroundings."
    },

    "enlarge/reduce": {
        name: "Enlarge/Reduce",
        level: 2,
        school: "Transmutation",
        castingTime: "1 action",
        range: "30 feet",
        components: "V, S, M (a pinch of powdered iron)",
        duration: "Concentration, up to 1 minute",
        description: "You cause a creature or an object you can see within range to grow larger or smaller for the duration. Choose either a creature or an object that is neither worn nor carried. If the target is unwilling, it can make a Constitution saving throw. On a success, the spell has no effect. If the target is a creature, everything it is wearing and carrying changes size with it. Enlarge. The target's size doubles in all dimensions, and its weight is multiplied by eight. Reduce. The target's size is halved in all dimensions, and its weight is reduced to one-eighth of normal."
    },

    "find traps": {
        name: "Find Traps",
        level: 2,
        school: "Divination",
        castingTime: "1 action",
        range: "120 feet",
        components: "V, S",
        duration: "Instantaneous",
        description: "You sense the presence of any trap within range that is within line of sight. A trap, for the purpose of this spell, includes anything that would inflict a sudden or unexpected effect you consider harmful or undesirable, which was specifically intended as such by its creator. Thus, the spell would sense an area affected by the alarm spell, a glyph of warding, or a mechanical pit trap, but it would not reveal a natural weakness in the floor, an unstable ceiling, or a hidden sinkhole."
    },

    "flame blade": {
        name: "Flame Blade",
        level: 2,
        school: "Evocation",
        castingTime: "1 bonus action",
        range: "Self",
        components: "V, S, M (leaf of sumac)",
        duration: "Concentration, up to 10 minutes",
        description: "You evoke a fiery blade in your free hand. The blade is similar in size and shape to a scimitar, and it lasts for the duration. If you let go of the blade, it disappears, but you can evoke the blade again as a bonus action. You can use your action to make a melee spell attack with the fiery blade. On a hit, the target takes 3d6 fire damage.",
        higherLevels: "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for every two slot levels above 2nd."
    },

    "gentle repose": {
        name: "Gentle Repose",
        level: 2,
        school: "Necromancy",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S, M (a pinch of salt and one copper piece placed on each of the corpse's eyes, which must remain there for the duration)",
        duration: "10 days",
        description: "You touch a corpse or other remains. For the duration, the target is protected from decay and can't become undead. The spell also effectively extends the time limit on raising the target from the dead, since days spent under the influence of this spell don't count against the time limit of spells such as raise dead."
    },

    "heat metal": {
        name: "Heat Metal",
        level: 2,
        school: "Transmutation",
        castingTime: "1 action",
        range: "60 feet",
        components: "V, S, M (a piece of iron and a flame)",
        duration: "Concentration, up to 1 minute",
        description: "Choose a manufactured metal object, such as a metal weapon or a suit of heavy or medium metal armor, that you can see within range. You cause the object to glow red-hot. Any creature in physical contact with the object takes 2d8 fire damage when you cast the spell. Until the spell ends, you can use a bonus action on each of your subsequent turns to cause this damage again. If a creature is holding or wearing the object and takes the damage from it, the creature must succeed on a Constitution saving throw or drop the object if it can.",
        higherLevels: "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd."
    },

    // Level 3 Spells
    "animate dead": {
        name: "Animate Dead",
        level: 3,
        school: "Necromancy",
        castingTime: "1 minute",
        range: "10 feet",
        components: "V, S, M (a drop of blood, a piece of flesh, and a pinch of bone dust)",
        duration: "Instantaneous",
        description: "This spell creates an undead servant. Choose a pile of bones or a corpse of a Medium or Small humanoid within range. Your spell imbues the target with a foul mimicry of life, raising it as an undead creature. The target becomes a skeleton if you chose bones or a zombie if you chose a corpse. On each of your turns, you can use a bonus action to mentally command any creature you made with this spell if the creature is within 60 feet of you. The creature remains under your control for 24 hours.",
        higherLevels: "When you cast this spell using a spell slot of 4th level or higher, you animate or reassert control over two additional undead creatures for each slot level above 3rd."
    },

    "beacon of hope": {
        name: "Beacon of Hope",
        level: 3,
        school: "Abjuration",
        castingTime: "1 action",
        range: "30 feet",
        components: "V, S",
        duration: "Concentration, up to 1 minute",
        description: "This spell bestows hope and vitality. Choose any number of creatures within range. For the duration, each target has advantage on Wisdom saving throws and death saving throws, and regains the maximum number of hit points possible from any healing."
    },

    "conjure animals": {
        name: "Conjure Animals",
        level: 3,
        school: "Conjuration",
        castingTime: "1 action",
        range: "60 feet",
        components: "V, S",
        duration: "Concentration, up to 1 hour",
        description: "You summon fey spirits that take the form of beasts and appear in unoccupied spaces that you can see within range. Choose one of the following options for what appears: One beast of challenge rating 2 or lower, Two beasts of challenge rating 1 or lower, Four beasts of challenge rating 1/2 or lower, Eight beasts of challenge rating 1/4 or lower. Each beast is also considered fey, and it disappears when it drops to 0 hit points or when the spell ends.",
        higherLevels: "When you cast this spell using certain higher-level spell slots, you choose one of the summoning options above, and more creatures appear: twice as many with a 5th-level slot, three times as many with a 7th-level slot, and four times as many with a 9th-level slot."
    },

    "create food and water": {
        name: "Create Food and Water",
        level: 3,
        school: "Conjuration",
        castingTime: "1 action",
        range: "30 feet",
        components: "V, S",
        duration: "Instantaneous",
        description: "You create 45 pounds of food and 30 gallons of water on the ground or in containers within range, enough to sustain up to fifteen humanoids or five steeds for 24 hours. The food is bland but nourishing, and spoils if uneaten after 24 hours. The water is clean and doesn't go bad."
    },

    "daylight": {
        name: "Daylight",
        level: 3,
        school: "Evocation",
        castingTime: "1 action",
        range: "60 feet",
        components: "V, S",
        duration: "1 hour",
        description: "A 60-foot-radius sphere of light spreads out from a point you choose within range. The sphere is bright light and sheds dim light for an additional 60 feet. If you chose a point on an object you are holding or one that isn't being worn or carried, the light shines from the object and moves with it. Completely covering the affected object with an opaque object, such as a bowl or a helm, blocks the light. If any of this spell's area overlaps with an area of darkness created by a spell of 3rd level or lower, the spell that created the darkness is dispelled."
    },

    "feign death": {
        name: "Feign Death",
        level: 3,
        school: "Necromancy",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S, M (a pinch of graveyard dirt)",
        duration: "1 hour",
        description: "You touch a willing creature and put it into a cataleptic state that is indistinguishable from death. For the spell's duration, or until you use an action to touch the target and dismiss the spell, the target appears dead to all outward inspection and to spells used to determine the target's status. The target is blinded and incapacitated, and its speed drops to 0. The target has resistance to all damage except psychic damage. If the target is diseased or poisoned when you cast the spell, or becomes diseased or poisoned while under the spell's effect, the disease and poison have no effect until the spell ends."
    },

    // Level 4 Spells
    "arcane eye": {
        name: "Arcane Eye",
        level: 4,
        school: "Divination",
        castingTime: "1 action",
        range: "30 feet",
        components: "V, S, M (a bit of bat fur)",
        duration: "Concentration, up to 1 hour",
        description: "You create an invisible, magical eye within range that hovers in the air for the duration. You mentally receive visual information from the eye, which has normal vision and darkvision out to 30 feet. The eye can look in every direction. As an action, you can move the eye up to 30 feet in any direction. There is no limit to how far away from you the eye can move, but it can't enter another plane of existence. A solid barrier blocks the eye's movement, but the eye can pass through an opening as small as 1 inch in diameter."
    },

    "compulsion": {
        name: "Compulsion",
        level: 4,
        school: "Enchantment",
        castingTime: "1 action",
        range: "30 feet",
        components: "V, S",
        duration: "Concentration, up to 1 minute",
        description: "Creatures of your choice that you can see within range and that can hear you must make a Wisdom saving throw. A target automatically succeeds on this saving throw if it can't be charmed. On a failed save, a target is affected by this spell. Until the spell ends, you can use a bonus action on each of your turns to designate a direction that is horizontal to you. Each affected target must use as much of its movement as possible to move in that direction on its next turn. It can take its action before it moves. After moving in this way, it can make another Wisdom saving throw to try to end the effect."
    },

    "fabricate": {
        name: "Fabricate",
        level: 4,
        school: "Transmutation",
        castingTime: "10 minutes",
        range: "120 feet",
        components: "V, S",
        duration: "Instantaneous",
        description: "You convert raw materials into products of the same material. For example, you can fabricate a wooden bridge from a clump of trees, a rope from a patch of hemp, and clothes from flax or wool. Choose raw materials that you can see within range. You can fabricate a Large or smaller object (contained within a 10-foot cube, or eight connected 5-foot cubes), given a sufficient quantity of raw material. If you are working with metal, stone, or another mineral substance, however, the fabricated object can be no larger than Medium."
    },

    "freedom of movement": {
        name: "Freedom of Movement",
        level: 4,
        school: "Abjuration",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S, M (a leather strap, bound around the arm or a similar appendage)",
        duration: "1 hour",
        description: "You touch a willing creature. For the duration, the target's movement is unaffected by difficult terrain, and spells and other magical effects can neither reduce the target's speed nor cause the target to be paralyzed or restrained. The target can also spend 5 feet of movement to automatically escape from nonmagical restraints, such as manacles or a creature that has it grappled. Finally, being underwater imposes no penalties on the target's movement or attacks."
    },

    "locate creature": {
        name: "Locate Creature",
        level: 4,
        school: "Divination",
        castingTime: "1 action",
        range: "Self",
        components: "V, S, M (a bit of fur from a bloodhound)",
        duration: "Concentration, up to 1 hour",
        description: "Describe or name a creature that is familiar to you. You sense the direction to the creature's location, as long as that creature is within 1,000 feet of you. If the creature is moving, you know the direction of its movement. The spell can locate a specific creature known to you, or the nearest creature of a specific kind, so long as you have seen such a creature up close—within 30 feet—at least once. If the creature you described or named is in a different form, such as being under the effects of a polymorph spell, this spell doesn't locate the creature."
    },

    // Level 5+ spells continue...
    "awaken": {
        name: "Awaken",
        level: 5,
        school: "Transmutation",
        castingTime: "8 hours",
        range: "Touch",
        components: "V, S, M (an agate worth at least 1,000 gp, which the spell consumes)",
        duration: "Instantaneous",
        description: "After spending the casting time tracing magical pathways within a precious gemstone, you touch a Huge or smaller beast or plant. The target must have either no Intelligence score or an Intelligence of 3 or less. The target gains an Intelligence of 10. The target also gains the ability to speak one language you know. If the target is a plant, it gains the ability to move its limbs, roots, vines, creepers, and so forth, and it gains senses similar to a human's. Your GM chooses statistics appropriate for the awakened plant."
    },

    "commune with nature": {
        name: "Commune with Nature",
        level: 5,
        school: "Divination",
        castingTime: "1 minute",
        range: "Self",
        components: "V, S",
        duration: "Instantaneous",
        description: "You briefly become one with nature and gain knowledge of the surrounding territory. In the outdoors, the spell gives you knowledge of the land within 3 miles of you. In caves and other natural underground settings, the radius is limited to 300 feet. The spell doesn't function where nature has been replaced by construction, such as in dungeons and towns. You instantly gain knowledge of up to three facts of your choice about any of the following subjects as they relate to the area: terrain and bodies of water, prevalent plants, minerals, animals, or peoples, powerful celestials, fey, fiends, elementals, or undead, influence from other planes of existence, buildings."
    },

    "contact other plane": {
        name: "Contact Other Plane",
        level: 5,
        school: "Divination",
        castingTime: "1 minute",
        range: "Self",
        components: "V",
        duration: "1 minute",
        description: "You mentally contact a demigod, the spirit of a long-dead sage, or some other mysterious entity from another plane. Contacting this extraplanar intelligence can strain or even break your mind. When you cast this spell, make a DC 15 Intelligence saving throw. On a failure, you take 6d6 psychic damage and are insane until you finish a long rest. While insane, you can't take actions, can't understand what other creatures say, can't read, and speak only in gibberish. On a successful save, you can ask the entity up to five questions. You must ask your questions before the spell ends. The GM answers each question with one word, such as 'yes,' 'no,' 'maybe,' 'never,' 'irrelevant,' or 'unclear.'"
    },

    "legend lore": {
        name: "Legend Lore",
        level: 5,
        school: "Divination",
        castingTime: "10 minutes",
        range: "Self",
        components: "V, S, M (incense worth at least 250 gp, which the spell consumes, and four ivory strips worth at least 50 gp each)",
        duration: "Instantaneous",
        description: "Name or describe a person, place, or object. The spell brings to your mind a brief summary of the significant lore about the thing you named. The lore might consist of current tales, forgotten stories, or even secret lore that has never been widely known. If the thing you named isn't of legendary importance, you gain no information. The more information you already have about the thing, the more precise and detailed the information you receive is."
    },

    "passwall": {
        name: "Passwall",
        level: 5,
        school: "Transmutation",
        castingTime: "1 action",
        range: "30 feet",
        components: "V, S, M (a pinch of sesame seeds)",
        duration: "1 hour",
        description: "A passage appears at a point of your choice that you can see on a wooden, plaster, or stone surface (such as a wall, a ceiling, or a floor) within range, and lasts for the duration. You choose the opening's dimensions: up to 5 feet wide, 8 feet tall, and 20 feet deep. The passage creates no instability in a structure surrounding it. When the opening disappears, any creatures or objects still in the passage created by the spell are safely ejected to an unoccupied space nearest to the surface on which you cast the spell."
    },

    "telepathic bond": {
        name: "Telepathic Bond",
        level: 5,
        school: "Divination",
        castingTime: "1 action",
        range: "30 feet",
        components: "V, S, M (pieces of eggshell from two different kinds of creatures)",
        duration: "1 hour",
        description: "You forge a telepathic link among up to eight willing creatures of your choice within range, psychically linking each creature to all the others for the duration. Creatures with Intelligence scores of 2 or less aren't affected by this spell. Until the spell ends, the targets can communicate telepathically through the bond whether or not they have a common language. The communication is possible over any distance, though it can't extend to other planes of existence."
    },

    // Level 6 Spells
    "blade barrier": {
        name: "Blade Barrier",
        level: 6,
        school: "Evocation",
        castingTime: "1 action",
        range: "90 feet",
        components: "V, S",
        duration: "Concentration, up to 10 minutes",
        description: "You create a vertical wall of whirling, razor-sharp blades made of magical energy. The wall appears within range and lasts for the duration. You can make a straight wall up to 100 feet long, 20 feet high, and 5 feet thick, or a ringed wall up to 60 feet in diameter, 20 feet high, and 5 feet thick. The wall provides three-quarters cover to creatures behind it, and its space is difficult terrain. When a creature enters the wall's area for the first time on a turn or starts its turn there, the creature must make a Dexterity saving throw. On a failed save, the creature takes 6d10 slashing damage. On a successful save, the creature takes half as much damage."
    },

    "contingency": {
        name: "Contingency",
        level: 6,
        school: "Evocation",
        castingTime: "10 minutes",
        range: "Self",
        components: "V, S, M (a statuette of yourself carved from ivory and decorated with gems worth at least 1,500 gp)",
        duration: "10 days",
        description: "Choose a spell of 5th level or lower that you can cast, that has a casting time of 1 action, and that can target you. You cast that spell—called the contingent spell—as part of casting contingency, expending spell slots for both, but the contingent spell doesn't come into effect. Instead, it takes effect when a certain circumstance occurs. You describe that circumstance when you cast the two spells. The contingent spell takes effect immediately after the circumstance is met for the first time, whether or not you want it to, and then contingency ends."
    },

    "find the path": {
        name: "Find the Path",
        level: 6,
        school: "Divination",
        castingTime: "1 minute",
        range: "Self",
        components: "V, S, M (a set of divinatory tools—such as bones, ivory sticks, cards, teeth, or carved runes—worth 100 gp and an object from the location you wish to find)",
        duration: "Concentration, up to 1 day",
        description: "This spell allows you to find the shortest, most direct physical route to a specific fixed location that you are familiar with on the same plane of existence. If you name a destination on another plane of existence, a destination that moves, or a destination that isn't specific, the spell fails. For the duration, as long as you are on the same plane of existence as the destination, you know how far it is and in what direction it lies. While you are traveling there, whenever you are presented with a choice of paths along the way, you automatically determine which path is the shortest and most direct route to the destination."
    },

    "forbiddance": {
        name: "Forbiddance",
        level: 6,
        school: "Abjuration",
        castingTime: "10 minutes",
        range: "Touch",
        components: "V, S, M (a sprinkling of holy water, rare incense, and powdered ruby worth at least 1,000 gp)",
        duration: "1 day",
        description: "You create a ward against magical travel that protects up to 40,000 square feet of floor space to a height of 30 feet above the floor. For the duration, creatures can't teleport into the area or use portals, such as those created by the gate spell, to enter the area. The spell proofs the area against planar travel, and therefore prevents creatures from accessing the area by way of the Astral Plane, Ethereal Plane, Feywild, Shadowfell, or the plane shift spell."
    },

    "guards and wards": {
        name: "Guards and Wards",
        level: 6,
        school: "Abjuration",
        castingTime: "10 minutes",
        range: "Touch",
        components: "V, S, M (burning incense, a small measure of brimstone and oil, a knotted string, a small amount of umber hulk blood, and a small silver rod worth at least 10 gp)",
        duration: "24 hours",
        description: "You create a ward that protects up to 2,500 square feet of floor space (an area 50 feet square, or one hundred 5-foot squares or twenty-five 10-foot squares). The warded area can be up to 20 feet tall, and shaped as you desire. You can ward several stories of a stronghold by dividing the area among them, as long as you can walk into each contiguous area while you are casting the spell."
    },

    // Level 7 Spells
    "arcane sword": {
        name: "Arcane Sword",
        level: 7,
        school: "Evocation",
        castingTime: "1 action",
        range: "60 feet",
        components: "V, S, M (a miniature platinum sword with a grip and pommel of copper and zinc, worth 250 gp)",
        duration: "Concentration, up to 1 minute",
        description: "You create a sword-shaped plane of force that hovers within range. It lasts for the duration. When the sword appears, you make a melee spell attack against a target of your choice within 5 feet of the sword. On a hit, the target takes 3d10 force damage. Until the spell ends, you can use a bonus action on each of your turns to move the sword up to 20 feet to a spot you can see and repeat this attack against the same target or a different one."
    },

    "mirage arcane": {
        name: "Mirage Arcane",
        level: 7,
        school: "Illusion",
        castingTime: "10 minutes",
        range: "Sight",
        components: "V, S",
        duration: "10 days",
        description: "You make terrain in an area up to 1 mile square look, sound, smell, and even feel like some other sort of terrain. The terrain's general shape remains the same, however. Open fields or a road could be made to resemble a swamp, hill, crevasse, or some other difficult or impassable terrain. A pond can be made to seem like a grassy meadow, a precipice like a gentle slope, or a rock-strewn gully like a wide and smooth road. Similarly, you can alter the appearance of structures, or add them where none are present. The spell doesn't disguise, conceal, or add creatures."
    },

    "project image": {
        name: "Project Image",
        level: 7,
        school: "Illusion",
        castingTime: "1 action",
        range: "500 miles",
        components: "V, S, M (a small replica of you made from materials worth at least 5 gp)",
        duration: "Concentration, up to 1 day",
        description: "You create an illusory copy of yourself that lasts for the duration. The copy can appear at any location within range that you have seen before, regardless of intervening obstacles. The illusion looks and sounds like you but is intangible. If the illusion takes any damage, it disappears, and the spell ends. You can use your action to move this illusion up to twice your speed, and make it gesture, speak, and behave in whatever way you choose. You can see through its eyes and hear through its ears as if you were in its space."
    },

    "sequester": {
        name: "Sequester",
        level: 7,
        school: "Transmutation",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S, M (a powder composed of diamond, emerald, ruby, and sapphire dust worth at least 5,000 gp, which the spell consumes)",
        duration: "Until dispelled",
        description: "By means of this spell, a willing creature or an object can be hidden away, safe from detection for the duration. When you cast the spell and touch the target, it becomes invisible and can't be targeted by divination spells or perceived through scrying sensors created by divination spells. If the target is a creature, it falls into a state of suspended animation. Time ceases to flow for it, and it doesn't grow older."
    },

    "symbol": {
        name: "Symbol",
        level: 7,
        school: "Abjuration",
        castingTime: "1 minute",
        range: "Touch",
        components: "V, S, M (mercury, phosphorus, and powdered diamond and opal with a total value of at least 1,000 gp, which the spell consumes)",
        duration: "Until dispelled or triggered",
        description: "When you cast this spell, you inscribe a harmful glyph either on a surface (such as a section of floor, a wall, or a table) or within an object that can be closed to conceal the glyph (such as a book, a scroll, or a treasure chest). If you choose a surface, the glyph can cover an area of the surface no larger than 10 feet in diameter. If you choose an object, that object must remain in its place; if the object is moved more than 10 feet from where you cast this spell, the glyph is broken, and the spell ends without being triggered."
    },

    // Level 8 Spells
    "antimagic field": {
        name: "Antimagic Field",
        level: 8,
        school: "Abjuration",
        castingTime: "1 action",
        range: "Self (10-foot-radius sphere)",
        components: "V, S, M (a pinch of powdered iron or iron filings)",
        duration: "Concentration, up to 1 hour",
        description: "A 10-foot-radius invisible sphere of antimagic surrounds you. This area is divorced from the magical energy that suffuses the multiverse. Within the sphere, spells can't be cast, summoned creatures disappear, and even magic items become mundane. Until the spell ends, the sphere moves with you, centered on you. Spells and other magical effects, except those created by an artifact or a deity, are suppressed in the sphere and can't protrude into it."
    },

    "clone": {
        name: "Clone",
        level: 8,
        school: "Necromancy",
        castingTime: "1 hour",
        range: "Touch",
        components: "V, S, M (a diamond worth at least 1,000 gp and at least 1 cubic inch of flesh of the creature that is to be cloned, which the spell consumes, and a vessel worth at least 2,000 gp that has a sealable lid and is large enough to hold a Medium creature)",
        duration: "Instantaneous",
        description: "This spell grows an inert duplicate of a living creature as a safeguard against death. This clone forms inside a sealed vessel and grows to full size and maturity after 120 days; you can also choose to have the clone be a younger version of the same creature. It remains inert and endures indefinitely, as long as its vessel remains undisturbed. At any time after the clone matures, if the original creature dies, its soul transfers to the clone, provided that the soul is free and willing to return."
    },

    "control weather": {
        name: "Control Weather",
        level: 8,
        school: "Transmutation",
        castingTime: "10 minutes",
        range: "Self (5-mile radius)",
        components: "V, S, M (burning incense and bits of earth and wood mixed in water)",
        duration: "Concentration, up to 8 hours",
        description: "You take control of the weather within 5 miles of you for the duration. You must be outdoors to cast this spell. Moving to a place where you don't have a clear path to the sky ends the spell early. When you cast the spell, you change the current weather conditions, which are determined by the GM based on the climate and season. You can change precipitation, temperature, and wind."
    },

    "feeblemind": {
        name: "Feeblemind",
        level: 8,
        school: "Enchantment",
        castingTime: "1 action",
        range: "150 feet",
        components: "V, S, M (a handful of clay, crystal, glass, or mineral spheres)",
        duration: "Instantaneous",
        description: "You blast the mind of a creature that you can see within range, attempting to shatter its intellect and personality. The target takes 4d6 psychic damage and must make an Intelligence saving throw. On a failed save, the creature's Intelligence and Charisma scores become 1. The creature can't cast spells, activate magic items, understand language, or communicate in any intelligible way. The creature can, however, identify its friends, follow them, and even protect them. At the end of every 30 days, the creature can repeat its saving throw against this spell."
    },

    "mind blank": {
        name: "Mind Blank",
        level: 8,
        school: "Abjuration",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S",
        duration: "24 hours",
        description: "Until the spell ends, one willing creature you touch is immune to psychic damage, any effect that would sense its emotions or read its thoughts, divination spells, and the charmed condition. The spell even foils wish spells and spells or effects of similar power used to affect the target's mind or to gain information about the target."
    },

    // Level 9 Spells
    "astral projection": {
        name: "Astral Projection",
        level: 9,
        school: "Necromancy",
        castingTime: "1 hour",
        range: "10 feet",
        components: "V, S, M (for each creature you affect with this spell, you must provide one jacinth worth at least 1,000 gp and one ornately carved bar of silver worth at least 100 gp, all of which the spell consumes)",
        duration: "Special",
        description: "You and up to eight willing creatures within range project your astral bodies into the Astral Plane (the spell fails and the casting is wasted if you are already on that plane). The material body you leave behind is unconscious and in a state of suspended animation; it doesn't need food or air and doesn't age. Your astral body resembles your mortal form in almost every way, replicating your game statistics and possessions."
    },

    "foresight": {
        name: "Foresight",
        level: 9,
        school: "Divination",
        castingTime: "1 minute",
        range: "Touch",
        components: "V, S, M (a hummingbird feather)",
        duration: "8 hours",
        description: "You touch a willing creature and bestow a limited ability to see into the immediate future. For the duration, the target can't be surprised and has advantage on attack rolls, ability checks, and saving throws. Additionally, other creatures have disadvantage on attack rolls against the target for the duration."
    },

    "imprisonment": {
        name: "Imprisonment",
        level: 9,
        school: "Abjuration",
        castingTime: "1 minute",
        range: "30 feet",
        components: "V, S, M (a vellum depiction or a carved statuette in the likeness of the target, and a special component that varies according to the version of the spell you choose, worth at least 500 gp per Hit Die of the target)",
        duration: "Until dispelled",
        description: "You create a magical restraint to hold a creature that you can see within range. The target must succeed on a Wisdom saving throw or be bound by the spell; if it succeeds, it is immune to this spell if you cast it again. While affected by this spell, the creature doesn't need to breathe, eat, or drink, and it doesn't age. Divination spells can't locate or perceive the target. You can choose one of the following forms of imprisonment."
    },

    "meteor swarm": {
        name: "Meteor Swarm",
        level: 9,
        school: "Evocation",
        castingTime: "1 action",
        range: "1 mile",
        components: "V, S",
        duration: "Instantaneous",
        description: "Blazing orbs of fire plummet to the ground at four different points you can see within range. Each creature in a 40-foot-radius sphere centered on each point you choose must make a Dexterity saving throw. The sphere spreads around corners. A creature takes 20d6 fire damage and 20d6 bludgeoning damage on a failed save, or half as much damage on a successful one. A creature in the area of more than one fiery burst is affected only once."
    },

    "power word heal": {
        name: "Power Word Heal",
        level: 9,
        school: "Evocation",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S",
        duration: "Instantaneous",
        description: "A wave of healing energy washes over the creature you touch. The target regains all its hit points. If the creature is charmed, frightened, paralyzed, or stunned, the condition ends. If the creature is prone, it can use its reaction to stand up. This spell has no effect on undead or constructs."
    },

    "true polymorph": {
        name: "True Polymorph",
        level: 9,
        school: "Transmutation",
        castingTime: "1 action",
        range: "30 feet",
        components: "V, S, M (a drop of mercury, a dollop of gum arabic, and a wisp of smoke)",
        duration: "Concentration, up to 1 hour",
        description: "Choose one creature or nonmagical object that you can see within range. You transform the creature into a different creature, the creature into a nonmagical object, or the object into a creature (the object must be neither worn nor carried by another creature). The transformation lasts for the duration, or until the target drops to 0 hit points or dies. If you concentrate on this spell for the full duration, the transformation becomes permanent."
    },

    "weird": {
        name: "Weird",
        level: 9,
        school: "Illusion",
        castingTime: "1 action",
        range: "120 feet",
        components: "V, S",
        duration: "Concentration, up to 1 minute",
        description: "Drawing on the deepest fears of a group of creatures, you create illusory creatures in their minds, visible only to them. Each creature in a 30-foot-radius sphere centered on a point of your choice within range must make a Wisdom saving throw. On a failed save, a creature becomes frightened for the duration. The illusion calls on the creature's deepest fears, manifesting its worst nightmares as an implacable threat. At the end of each of the frightened creature's turns, it must succeed on a Wisdom saving throw or take 4d10 psychic damage. On a successful save, the spell ends for that creature."
    },

    // Additional Cantrips (continued)
    "blade ward": {
        name: "Blade Ward",
        level: 0,
        school: "Abjuration",
        castingTime: "1 action",
        range: "Self",
        components: "V, S",
        duration: "1 round",
        description: "You extend your hand and trace a sigil of warding in the air. Until the end of your next turn, you have resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks."
    },

    "dancing lights": {
        name: "Dancing Lights",
        level: 0,
        school: "Evocation",
        castingTime: "1 action",
        range: "120 feet",
        components: "V, S, M (a bit of phosphorus or wychwood, or a glowworm)",
        duration: "Concentration, up to 1 minute",
        description: "You create up to four torch-sized lights within range, making them appear as torches, lanterns, or glowing orbs that hover in the air for the duration. You can also combine the four lights into one glowing vaguely humanoid form of Medium size. Whichever form you choose, each light sheds dim light in a 10-foot radius. As a bonus action on your turn, you can move the lights up to 60 feet to a new spot within range."
    },

    "druidcraft": {
        name: "Druidcraft",
        level: 0,
        school: "Transmutation",
        castingTime: "1 action",
        range: "30 feet",
        components: "V, S",
        duration: "Instantaneous",
        description: "Whispering to the spirits of nature, you create one of the following effects within range: You create a tiny, harmless sensory effect that predicts what the weather will be at your location for the next 24 hours. You instantly make a flower blossom, a seed pod open, or a leaf bud bloom. You create an instantaneous, harmless sensory effect, such as falling leaves, a puff of wind, the sound of a small animal, or the faint odor of skunk. You instantly light or snuff out a candle, a torch, or a small campfire."
    },

    "guidance": {
        name: "Guidance",
        level: 0,
        school: "Divination",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S",
        duration: "Concentration, up to 1 minute",
        description: "You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one ability check of its choice. It can roll the die before or after making the ability check. The spell then ends."
    },

    "resistance": {
        name: "Resistance",
        level: 0,
        school: "Abjuration",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S, M (a miniature cloak)",
        duration: "Concentration, up to 1 minute",
        description: "You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one saving throw of its choice. It can roll the die before or after making the saving throw. The spell then ends."
    },

    "shillelagh": {
        name: "Shillelagh",
        level: 0,
        school: "Transmutation",
        castingTime: "1 bonus action",
        range: "Touch",
        components: "V, S, M (mistletoe, a shamrock leaf, and a club or quarterstaff)",
        duration: "1 minute",
        description: "The wood of a club or quarterstaff you are holding is imbued with nature's power. For the duration, you can use your spellcasting ability instead of Strength for the attack and damage rolls of melee attacks using that weapon, and the weapon's damage die becomes a d8. The weapon also becomes magical, if it isn't already. The spell ends if you cast it again or if you let go of the weapon."
    },

    "thaumaturgy": {
        name: "Thaumaturgy",
        level: 0,
        school: "Transmutation",
        castingTime: "1 action",
        range: "30 feet",
        components: "V",
        duration: "Up to 1 minute",
        description: "You manifest a minor wonder, a sign of supernatural power, within range. You create one of the following magical effects within range: Your voice booms up to three times as loud as normal for 1 minute. You cause flames to flicker, brighten, dim, or change color for 1 minute. You cause harmless tremors in the ground for 1 minute. You create an instantaneous sound that originates from a point of your choice within range. You instantaneously cause an unlocked door or window to fly open or slam shut. You alter the appearance of your eyes for 1 minute."
    },

    "vicious mockery": {
        name: "Vicious Mockery",
        level: 0,
        school: "Enchantment",
        castingTime: "1 action",
        range: "60 feet",
        components: "V",
        duration: "Instantaneous",
        description: "You unleash a string of insults laced with subtle enchantments at a creature you can see within range. If the target can hear you (though it need not understand you), it must succeed on a Wisdom saving throw or take 1d4 psychic damage and have disadvantage on the next attack roll it makes before the end of its next turn.",
        higherLevels: "This spell's damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4)."
    },

    // Additional Level 1 Spells
    "chromatic orb": {
        name: "Chromatic Orb",
        level: 1,
        school: "Evocation",
        castingTime: "1 action",
        range: "90 feet",
        components: "V, S, M (a diamond worth at least 50 gp)",
        duration: "Instantaneous",
        description: "You hurl a 4-inch-diameter sphere of energy at a creature that you can see within range. You choose acid, cold, fire, lightning, poison, or thunder for the type of orb you create, and then make a ranged spell attack against the target. If the attack hits, the creature takes 3d8 damage of the type you chose.",
        higherLevels: "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."
    },

    "color spray": {
        name: "Color Spray",
        level: 1,
        school: "Illusion",
        castingTime: "1 action",
        range: "Self (15-foot cone)",
        components: "V, S, M (a pinch of powder or sand that is colored red, yellow, and blue)",
        duration: "1 round",
        description: "A dazzling array of flashing, colored light springs from your hand. Roll 6d10; the total is how many hit points of creatures this spell can effect. Creatures in a 15-foot cone originating from you are affected in ascending order of their current hit points (ignoring unconscious creatures and creatures that can't see). Starting with the creature that has the lowest current hit points, each creature affected by this spell is blinded until the spell ends. Subtract each creature's hit points from the total before moving on to the creature with the next lowest hit points.",
        higherLevels: "When you cast this spell using a spell slot of 2nd level or higher, roll an additional 2d10 for each slot level above 1st."
    },

    "comprehend languages": {
        name: "Comprehend Languages",
        level: 1,
        school: "Divination",
        castingTime: "1 action",
        range: "Self",
        components: "V, S, M (a pinch of soot and salt)",
        duration: "1 hour",
        description: "For the duration, you understand the literal meaning of any spoken language that you hear. You also understand any written language that you see, but you must be touching the surface on which the words are written. It takes about 1 minute to read one page of text. This spell doesn't decode secret messages in a text or a glyph, such as an arcane sigil, that isn't part of a written language."
    },

    "create or destroy water": {
        name: "Create or Destroy Water",
        level: 1,
        school: "Transmutation",
        castingTime: "1 action",
        range: "30 feet",
        components: "V, S, M (a drop of water if creating water or a few grains of sand if destroying it)",
        duration: "Instantaneous",
        description: "You either create or destroy water. Create Water. You create up to 10 gallons of clean water within range in an open container. Alternatively, the water falls as rain in a 30-foot cube within range, extinguishing exposed flames in the area. Destroy Water. You destroy up to 10 gallons of water in an open container within range. Alternatively, you destroy fog in a 30-foot cube within range.",
        higherLevels: "When you cast this spell using a spell slot of 2nd level or higher, you create or destroy 10 additional gallons of water, or the size of the cube increases by 5 feet, for each slot level above 1st."
    },

    "disguise self": {
        name: "Disguise Self",
        level: 1,
        school: "Illusion",
        castingTime: "1 action",
        range: "Self",
        components: "V, S",
        duration: "1 hour",
        description: "You make yourself—including your clothing, armor, weapons, and other belongings on your person—look different until the spell ends or until you use your action to dismiss it. You can seem 1 foot shorter or taller and can appear thin, fat, or in between. You can't change your body type, so you must adopt a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you. The changes wrought by this spell fail to hold up to physical inspection."
    },

    "divine favor": {
        name: "Divine Favor",
        level: 1,
        school: "Evocation",
        castingTime: "1 bonus action",
        range: "Self",
        components: "V, S",
        duration: "Concentration, up to 1 minute",
        description: "Your prayer empowers you with divine radiance. Until the spell ends, your weapon attacks deal an extra 1d4 radiant damage on a hit."
    },

    "entangle": {
        name: "Entangle",
        level: 1,
        school: "Conjuration",
        castingTime: "1 action",
        range: "90 feet",
        components: "V, S",
        duration: "Concentration, up to 1 minute",
        description: "Grasping weeds and vines sprout from the ground in a 20-foot square starting from a point within range. For the duration, these plants turn the ground in the area into difficult terrain. A creature in the area when you cast the spell must succeed on a Strength saving throw or be restrained by the entangling plants until the spell ends. A creature restrained by the plants can use its action to make a Strength check against your spell save DC. On a success, it frees itself."
    },

    "expeditious retreat": {
        name: "Expeditious Retreat",
        level: 1,
        school: "Transmutation",
        castingTime: "1 bonus action",
        range: "Self",
        components: "V, S",
        duration: "Concentration, up to 10 minutes",
        description: "This spell allows you to move at an incredible pace. When you cast this spell, and then as a bonus action on each of your turns until the spell ends, you can take the Dash action."
    },

    "false life": {
        name: "False Life",
        level: 1,
        school: "Necromancy",
        castingTime: "1 action",
        range: "Self",
        components: "V, S, M (a small amount of alcohol or distilled spirits)",
        duration: "1 hour",
        description: "Bolstering yourself with a necromantic facsimile of life, you gain 1d4 + 4 temporary hit points for the duration.",
        higherLevels: "When you cast this spell using a spell slot of 2nd level or higher, you gain 5 additional temporary hit points for each slot level above 1st."
    },

    "feather fall": {
        name: "Feather Fall",
        level: 1,
        school: "Transmutation",
        castingTime: "1 reaction",
        range: "60 feet",
        components: "V, M (a small feather or piece of down)",
        duration: "1 minute",
        description: "Choose up to five falling creatures within range. A falling creature's rate of descent slows to 60 feet per round until the spell ends. If the creature lands before the spell ends, it takes no falling damage and can land on its feet, and the spell ends for that creature."
    },

    "find familiar": {
        name: "Find Familiar",
        level: 1,
        school: "Conjuration",
        castingTime: "1 hour",
        range: "10 feet",
        components: "V, S, M (10 gp worth of charcoal, incense, and herbs that must be consumed by fire in a brass brazier)",
        duration: "Instantaneous",
        description: "You gain the service of a familiar, a spirit that takes an animal form you choose: bat, cat, crab, frog (toad), hawk, lizard, octopus, owl, poisonous snake, fish (quipper), rat, raven, sea horse, spider, or weasel. Appearing in an unoccupied space within range, the familiar has the statistics of the chosen form, though it is a celestial, fey, or fiend (your choice) instead of a beast."
    },

    "hellish rebuke": {
        name: "Hellish Rebuke",
        level: 1,
        school: "Evocation",
        castingTime: "1 reaction",
        range: "60 feet",
        components: "V, S",
        duration: "Instantaneous",
        description: "You point your finger, and the creature that damaged you is momentarily surrounded by hellish flames. The creature must make a Dexterity saving throw. It takes 2d10 fire damage on a failed save, or half as much damage on a successful one.",
        higherLevels: "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st."
    },

    "hex": {
        name: "Hex",
        level: 1,
        school: "Enchantment",
        castingTime: "1 bonus action",
        range: "90 feet",
        components: "V, S, M (the petrified eye of a newt)",
        duration: "Concentration, up to 1 hour",
        description: "You place a curse on a creature that you can see within range. Until the spell ends, you deal an extra 1d6 necrotic damage to the target whenever you hit it with an attack. Also, choose one ability when you cast the spell. The target has disadvantage on ability checks made with the chosen ability. If the target drops to 0 hit points before this spell ends, you can use a bonus action on a subsequent turn of yours to curse a new creature.",
        higherLevels: "When you cast this spell using a spell slot of 3rd or 4th level, you can maintain your concentration on the spell for up to 8 hours. When you use a spell slot of 5th level or higher, you can maintain your concentration on the spell for up to 24 hours."
    },

    "hunter's mark": {
        name: "Hunter's Mark",
        level: 1,
        school: "Divination",
        castingTime: "1 bonus action",
        range: "90 feet",
        components: "V",
        duration: "Concentration, up to 1 hour",
        description: "You choose a creature you can see within range and mystically mark it as your quarry. Until the spell ends, you deal an extra 1d6 damage to the target whenever you hit it with a weapon attack, and you have advantage on any Wisdom (Perception) or Wisdom (Survival) check you make to find it. If the target drops to 0 hit points before this spell ends, you can use a bonus action on a subsequent turn of yours to mark a new creature.",
        higherLevels: "When you cast this spell using a spell slot of 3rd or 4th level, you can maintain your concentration on the spell for up to 8 hours. When you use a spell slot of 5th level or higher, you can maintain your concentration on the spell for up to 24 hours."
    },

    "inflict wounds": {
        name: "Inflict Wounds",
        level: 1,
        school: "Necromancy",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S",
        duration: "Instantaneous",
        description: "Make a melee spell attack against a creature you can reach. On a hit, the target takes 3d10 necrotic damage.",
        higherLevels: "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st."
    },

    "jump": {
        name: "Jump",
        level: 1,
        school: "Transmutation",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S, M (a grasshopper's hind leg)",
        duration: "1 minute",
        description: "You touch a creature. The creature's jump distance is tripled until the spell ends."
    },

    "protection from evil and good": {
        name: "Protection from Evil and Good",
        level: 1,
        school: "Abjuration",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S, M (holy water or powdered silver and iron, which the spell consumes)",
        duration: "Concentration, up to 10 minutes",
        description: "Until the spell ends, one willing creature you touch is protected against certain types of creatures: aberrations, celestials, elementals, fey, fiends, and undead. The protection grants several benefits. Creatures of those types have disadvantage on attack rolls against the target. The target also can't be charmed, frightened, or possessed by them. If the target is already charmed, frightened, or possessed by such a creature, the target has advantage on any new saving throw against the relevant effect."
    },

    "sanctuary": {
        name: "Sanctuary",
        level: 1,
        school: "Abjuration",
        castingTime: "1 bonus action",
        range: "30 feet",
        components: "V, S, M (a small silver mirror)",
        duration: "1 minute",
        description: "You ward a creature within range against attack. Until the spell ends, any creature who targets the warded creature with an attack or a harmful spell must first make a Wisdom saving throw. On a failed save, the creature must choose a new target or lose the attack or spell. This spell doesn't protect the warded creature from area effects, such as the explosion of a fireball. If the warded creature makes an attack or casts a spell that affects an enemy creature, this spell ends."
    },

    "shield of faith": {
        name: "Shield of Faith",
        level: 1,
        school: "Abjuration",
        castingTime: "1 bonus action",
        range: "60 feet",
        components: "V, S, M (a small parchment with a bit of holy text written on it)",
        duration: "Concentration, up to 10 minutes",
        description: "A shimmering field appears and surrounds a creature of your choice within range, granting it a +2 bonus to AC for the duration."
    },

    "thunderwave": {
        name: "Thunderwave",
        level: 1,
        school: "Evocation",
        castingTime: "1 action",
        range: "Self (15-foot cube)",
        components: "V, S",
        duration: "Instantaneous",
        description: "A wave of thunderous force sweeps out from you. Each creature in a 15-foot cube originating from you must make a Constitution saving throw. On a failed save, a creature takes 2d8 thunder damage and is pushed 10 feet away from you. On a successful save, the creature takes half as much damage and isn't pushed. In addition, unsecured objects that are completely within the area of effect are automatically pushed 10 feet away from you by the spell's effect, and the spell emits a thunderous boom audible out to 300 feet.",
        higherLevels: "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."
    },

    "unseen servant": {
        name: "Unseen Servant",
        level: 1,
        school: "Conjuration",
        castingTime: "1 action",
        range: "60 feet",
        components: "V, S, M (a piece of string and a bit of wood)",
        duration: "1 hour",
        description: "This spell creates an invisible, mindless, shapeless force that performs simple tasks at your command until the spell ends. The servant springs into existence in an unoccupied space on the ground within range. It has AC 10, 1 hit point, and a Strength of 2, and it can't attack. If it drops to 0 hit points, the spell ends. Once on each of your turns as a bonus action, you can mentally command the servant to move up to 15 feet and interact with an object."
    },

    // Additional Level 2 Spells
    "aid": {
        name: "Aid",
        level: 2,
        school: "Abjuration",
        castingTime: "1 action",
        range: "30 feet",
        components: "V, S, M (a tiny strip of white cloth)",
        duration: "8 hours",
        description: "Your spell bolsters your allies with toughness and resolve. Choose up to three creatures within range. Each target's hit point maximum and current hit points increase by 5 for the duration.",
        higherLevels: "When you cast this spell using a spell slot of 3rd level or higher, a target's hit points increase by an additional 5 for each slot level above 2nd."
    },

    "blindness/deafness": {
        name: "Blindness/Deafness",
        level: 2,
        school: "Necromancy",
        castingTime: "1 action",
        range: "30 feet",
        components: "V",
        duration: "1 minute",
        description: "You can blind or deafen a foe. Choose one creature that you can see within range to make a Constitution saving throw. If it fails, the target is either blinded or deafened (your choice) for the duration. At the end of each of its turns, the target can make a Constitution saving throw. On a success, the spell ends.",
        higherLevels: "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd."
    },

    "blur": {
        name: "Blur",
        level: 2,
        school: "Illusion",
        castingTime: "1 action",
        range: "Self",
        components: "V",
        duration: "Concentration, up to 1 minute",
        description: "Your body becomes blurred, shifting and wavering to all who can see you. For the duration, any creature has disadvantage on attack rolls against you. An attacker is immune to this effect if it doesn't rely on sight, as with blindsight, or can see through illusions, as with truesight."
    },

    "continual flame": {
        name: "Continual Flame",
        level: 2,
        school: "Evocation",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S, M (ruby dust worth 50 gp, which the spell consumes)",
        duration: "Until dispelled",
        description: "A flame, equivalent in brightness to a torch, springs forth from an object that you touch. The effect looks like a regular flame, but it creates no heat and doesn't use oxygen. A continual flame can be covered or hidden but not smothered or quenched."
    },

    "crown of madness": {
        name: "Crown of Madness",
        level: 2,
        school: "Enchantment",
        castingTime: "1 action",
        range: "120 feet",
        components: "V, S",
        duration: "Concentration, up to 1 minute",
        description: "One humanoid of your choice that you can see within range must succeed on a Wisdom saving throw or become charmed by you for the duration. While the target is charmed in this way, a twisted crown of jagged iron appears on its head, and a madness glows in its eyes. The charmed target must use its action before moving on each of its turns to make a melee attack against a creature other than itself that you mentally choose. The target can act normally on its turn if you choose no creature or if none are within its reach."
    },

    "detect thoughts": {
        name: "Detect Thoughts",
        level: 2,
        school: "Divination",
        castingTime: "1 action",
        range: "Self",
        components: "V, S, M (a copper piece)",
        duration: "Concentration, up to 1 minute",
        description: "For the duration, you can read the thoughts of certain creatures. When you cast the spell and as your action on each turn until the spell ends, you can focus your mind on any one creature that you can see within 30 feet of you. If the creature you choose has an Intelligence of 3 or lower or doesn't speak any language, the creature is unaffected. You initially learn the surface thoughts of the creature—what is most on its mind in that moment."
    },

    "gust of wind": {
        name: "Gust of Wind",
        level: 2,
        school: "Evocation",
        castingTime: "1 action",
        range: "Self (60-foot line)",
        components: "V, S, M (a legume seed)",
        duration: "Concentration, up to 1 minute",
        description: "A line of strong wind 60 feet long and 10 feet wide blasts from you in a direction you choose for the spell's duration. Each creature that starts its turn in the line must succeed on a Strength saving throw or be pushed 15 feet away from you in a direction following the line. Any creature in the line must spend 2 feet of movement for every 1 foot it moves when moving closer to you. The gust disperses gas or vapor, and it extinguishes candles, torches, and similar unprotected flames in the area."
    },

    "knock": {
        name: "Knock",
        level: 2,
        school: "Transmutation",
        castingTime: "1 action",
        range: "60 feet",
        components: "V",
        duration: "Instantaneous",
        description: "Choose an object that you can see within range. The object can be a door, a box, a chest, a set of manacles, a padlock, or another object that contains a mundane or magical means that prevents access. A target that is held shut by a mundane lock or that is stuck or barred becomes unlocked, unstuck, or unbarred. If the object has multiple locks, only one of them is unlocked. If you choose a target that is held shut with arcane lock, that spell is suppressed for 10 minutes, during which time the target can be opened and shut normally."
    },

    "levitate": {
        name: "Levitate",
        level: 2,
        school: "Transmutation",
        castingTime: "1 action",
        range: "60 feet",
        components: "V, S, M (either a small leather loop or a piece of golden wire bent into a cup shape with a long shank on one end)",
        duration: "Concentration, up to 10 minutes",
        description: "One creature or object of your choice that you can see within range rises vertically, up to 20 feet, and remains suspended there for the duration. The spell can levitate a target that weighs up to 500 pounds. An unwilling creature that succeeds on a Constitution saving throw is unaffected. The target can move only by pushing or pulling against a fixed object or surface within reach, which allows it to move as if it were climbing."
    },

    "locate object": {
        name: "Locate Object",
        level: 2,
        school: "Divination",
        castingTime: "1 action",
        range: "Self",
        components: "V, S, M (a forked twig)",
        duration: "Concentration, up to 10 minutes",
        description: "Describe or name an object that is familiar to you. You sense the direction to the object's location, as long as that object is within 1,000 feet of you. If the object is in motion, you know the direction of its movement. The spell can locate a specific object known to you, as long as you have seen it up close—within 30 feet—at least once. Alternatively, the spell can locate the nearest object of a particular kind, such as a certain kind of apparel, jewelry, furniture, tool, or weapon."
    },

    "magic mouth": {
        name: "Magic Mouth",
        level: 2,
        school: "Illusion",
        castingTime: "1 action",
        range: "30 feet",
        components: "V, S, M (a small bit of honeycomb and jade dust worth at least 10 gp, which the spell consumes)",
        duration: "Until dispelled",
        description: "You implant a message within an object in range, a message that is uttered when a trigger condition is met. Choose an object that you can see and that isn't being worn or carried by another creature. Then speak the message, which must be 25 words or less, though it can be delivered over as long as 10 minutes. Finally, determine the circumstance that will trigger the spell to deliver your message."
    },

    "mirror image": {
        name: "Mirror Image",
        level: 2,
        school: "Illusion",
        castingTime: "1 action",
        range: "Self",
        components: "V, S",
        duration: "1 minute",
        description: "Three illusory duplicates of yourself appear in your space. Until the spell ends, the duplicates move with you and mimic your actions, shifting position so it's impossible to track which image is real. You can use your action to dismiss the illusory duplicates. Each time a creature targets you with an attack during the spell's duration, roll a d20 to determine whether the attack instead targets one of your duplicates. If you have three duplicates, you must roll a 6 or higher to change the attack's target to a duplicate. With two duplicates, you must roll an 8 or higher. With one duplicate, you must roll an 11 or higher."
    },

    "moonbeam": {
        name: "Moonbeam",
        level: 2,
        school: "Evocation",
        castingTime: "1 action",
        range: "120 feet",
        components: "V, S, M (several seeds of any moonseed plant and a piece of opalescent feldspar)",
        duration: "Concentration, up to 1 minute",
        description: "A silvery beam of pale light shines down in a 5-foot-radius, 40-foot-high cylinder centered on a point within range. Until the spell ends, dim light fills the cylinder. When a creature enters the spell's area for the first time on a turn or starts its turn there, it is engulfed in ghostly flames that cause searing pain, and it must make a Constitution saving throw. It takes 2d10 radiant damage on a failed save, or half as much damage on a successful one. A shapeshifter makes its saving throw with disadvantage.",
        higherLevels: "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d10 for each slot level above 2nd."
    },

    "pass without trace": {
        name: "Pass without Trace",
        level: 2,
        school: "Abjuration",
        castingTime: "1 action",
        range: "Self",
        components: "V, S, M (ashes from a burned leaf of mistletoe and a sprig of spruce)",
        duration: "Concentration, up to 1 hour",
        description: "A veil of shadows and silence radiates from you, masking you and your companions from detection. For the duration, each creature you choose within 30 feet of you (including you) has a +10 bonus to Dexterity (Stealth) checks and can't be tracked except by magical means. A creature that receives this bonus leaves behind no tracks or other traces of its passage."
    },

    "rope trick": {
        name: "Rope Trick",
        level: 2,
        school: "Transmutation",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S, M (powdered corn extract and a twisted loop of parchment)",
        duration: "1 hour",
        description: "You touch a length of rope that is up to 60 feet long. One end of the rope then rises into the air until the whole rope hangs perpendicular to the ground. At the upper end of the rope, an invisible entrance opens to an extradimensional space that lasts until the spell ends. The extradimensional space can be reached by climbing to the top of the rope. The space can hold as many as eight Medium or smaller creatures. The rope can be pulled into the space, making the rope disappear from view outside the space."
    },

    "scorching ray": {
        name: "Scorching Ray",
        level: 2,
        school: "Evocation",
        castingTime: "1 action",
        range: "120 feet",
        components: "V, S",
        duration: "Instantaneous",
        description: "You create three rays of fire and hurl them at targets within range. You can hurl them at one target or several. Make a ranged spell attack for each ray. On a hit, the target takes 2d6 fire damage.",
        higherLevels: "When you cast this spell using a spell slot of 3rd level or higher, you create one additional ray for each slot level above 2nd."
    },

    "see invisibility": {
        name: "See Invisibility",
        level: 2,
        school: "Divination",
        castingTime: "1 action",
        range: "Self",
        components: "V, S, M (a pinch of talc and a small sprinkling of powdered silver)",
        duration: "1 hour",
        description: "For the duration, you see invisible creatures and objects as if they were visible, and you can see into the Ethereal Plane. Ethereal creatures and objects appear ghostly and translucent."
    },

    "shatter": {
        name: "Shatter",
        level: 2,
        school: "Evocation",
        castingTime: "1 action",
        range: "60 feet",
        components: "V, S, M (a chip of mica)",
        duration: "Instantaneous",
        description: "A sudden loud ringing noise, painfully intense, erupts from a point of your choice within range. Each creature in a 10-foot-radius sphere centered on that point must make a Constitution saving throw. A creature takes 3d8 thunder damage on a failed save, or half as much damage on a successful one. A creature made of inorganic material such as stone, crystal, or metal has disadvantage on this saving throw. A nonmagical object that isn't being worn or carried also takes the damage if it's in the spell's area.",
        higherLevels: "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd."
    },

    "silence": {
        name: "Silence",
        level: 2,
        school: "Illusion",
        castingTime: "1 action",
        range: "120 feet",
        components: "V, S",
        duration: "Concentration, up to 10 minutes",
        description: "For the duration, no sound can be created within or pass through a 20-foot-radius sphere centered on a point you choose within range. Any creature or object entirely inside the sphere is immune to thunder damage, and creatures are deafened while entirely inside it. Casting a spell that includes a verbal component is impossible there."
    },

    "spider climb": {
        name: "Spider Climb",
        level: 2,
        school: "Transmutation",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S, M (a drop of bitumen and a spider)",
        duration: "Concentration, up to 1 hour",
        description: "Until the spell ends, one willing creature you touch gains the ability to move up, down, and across vertical surfaces and upside down along ceilings, while leaving its hands free. The target also gains a climbing speed equal to its walking speed."
    },

    "spike growth": {
        name: "Spike Growth",
        level: 2,
        school: "Transmutation",
        castingTime: "1 action",
        range: "150 feet",
        components: "V, S, M (seven sharp thorns or seven small twigs, each sharpened to a point)",
        duration: "Concentration, up to 10 minutes",
        description: "The ground in a 20-foot radius centered on a point within range twists and sprouts hard spikes and thorns. The area becomes difficult terrain for the duration. When a creature moves into or within the area, it takes 2d4 piercing damage for every 5 feet it travels. The transformation of the ground is camouflaged to look natural. Any creature that can't see the area at the time the spell is cast must make a Wisdom (Perception) check against your spell save DC to recognize the terrain as hazardous before entering it."
    },

    "warding bond": {
        name: "Warding Bond",
        level: 2,
        school: "Abjuration",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S, M (a pair of platinum rings worth at least 50 gp each, which you and the target must wear for the duration)",
        duration: "1 hour",
        description: "This spell wards a willing creature you touch and creates a mystic connection between you and the target until the spell ends. While the target is within 60 feet of you, it gains a +1 bonus to AC and saving throws, and it has resistance to all damage. Also, each time it takes damage, you take the same amount of damage. The spell ends if you drop to 0 hit points or if you and the target become separated by more than 60 feet. It also ends if the spell is cast again on either of the connected creatures."
    },

    "web": {
        name: "Web",
        level: 2,
        school: "Conjuration",
        castingTime: "1 action",
        range: "60 feet",
        components: "V, S, M (a bit of spiderweb)",
        duration: "Concentration, up to 1 hour",
        description: "You conjure a mass of thick, sticky webbing at a point of your choice within range. The webs fill a 20-foot cube from that point for the duration. The webs are difficult terrain and lightly obscure their area. If the webs aren't anchored between two solid masses (such as walls or trees) or layered across a floor, wall, or ceiling, the conjured web collapses on itself, and the spell ends at the start of your next turn. Webs layered over a flat surface have a depth of 5 feet."
    },

    // Additional Level 3 Spells
    "bestow curse": {
        name: "Bestow Curse",
        level: 3,
        school: "Necromancy",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S",
        duration: "Concentration, up to 1 minute",
        description: "You touch a creature, and that creature must succeed on a Wisdom saving throw or become cursed for the duration of the spell. When you cast this spell, choose the nature of the curse from the following options: Choose one ability score. While cursed, the target has disadvantage on ability checks and saving throws made with that ability score. While cursed, the target has disadvantage on attack rolls against you. While cursed, the target must make a Wisdom saving throw at the start of each of its turns. If it fails, it wastes its action that turn doing nothing. While cursed, your attacks and spells deal an extra 1d8 necrotic damage to the target.",
        higherLevels: "If you cast this spell using a spell slot of 4th level or higher, the duration is concentration, up to 10 minutes. If you use a spell slot of 5th level or higher, the duration is 8 hours. If you use a spell slot of 7th level or higher, the duration is 24 hours. If you use a 9th level spell slot, the spell lasts until it is dispelled."
    },

    "blink": {
        name: "Blink",
        level: 3,
        school: "Transmutation",
        castingTime: "1 action",
        range: "Self",
        components: "V, S",
        duration: "1 minute",
        description: "Roll a d20 at the end of each of your turns for the duration of the spell. On a roll of 11 or higher, you vanish from your current plane of existence and appear in the Ethereal Plane (the spell fails and the casting is wasted if you were already on that plane). At the start of your next turn, and when the spell ends if you are on the Ethereal Plane, you return to an unoccupied space of your choice that you can see within 10 feet of the space you vanished from. If no unoccupied space is available within that range, you appear in the nearest unoccupied space."
    },

    "call lightning": {
        name: "Call Lightning",
        level: 3,
        school: "Conjuration",
        castingTime: "1 action",
        range: "120 feet",
        components: "V, S",
        duration: "Concentration, up to 10 minutes",
        description: "A storm cloud appears in the shape of a cylinder that is 10 feet tall with a 60-foot radius, centered on a point you can see 100 feet directly above you. The spell fails if you can't see a point in the air where the storm cloud could appear. When you cast the spell, choose a point you can see within range. A bolt of lightning flashes down from the cloud to that point. Each creature within 5 feet of that point must make a Dexterity saving throw. A creature takes 3d10 lightning damage on a failed save, or half as much damage on a successful one.",
        higherLevels: "When you cast this spell using a spell slot of 4th or higher level, the damage increases by 1d10 for each slot level above 3rd."
    },

    "clairvoyance": {
        name: "Clairvoyance",
        level: 3,
        school: "Divination",
        castingTime: "10 minutes",
        range: "1 mile",
        components: "V, S, M (a focus worth at least 100 gp, either a jeweled horn for hearing or a glass eye for seeing)",
        duration: "Concentration, up to 10 minutes",
        description: "You create an invisible sensor within range in a location familiar to you (a place you have visited or seen before) or in an obvious location that is unfamiliar to you (such as behind a door, around a corner, or in a grove of trees). The sensor remains in place for the duration, and it can't be attacked or otherwise interacted with. When you cast the spell, you choose seeing or hearing. You can use the chosen sense through the sensor as if you were in its space. As your action, you can switch between seeing and hearing."
    },

    "crusader's mantle": {
        name: "Crusader's Mantle",
        level: 3,
        school: "Evocation",
        castingTime: "1 action",
        range: "Self",
        components: "V",
        duration: "Concentration, up to 1 minute",
        description: "Holy power radiates from you in an aura with a 30-foot radius, awakening boldness in friendly creatures. Until the spell ends, the aura moves with you, centered on you. While in the aura, each nonhostile creature in the aura (including you) deals an extra 1d4 radiant damage when it hits with a weapon attack."
    },

    "elemental weapon": {
        name: "Elemental Weapon",
        level: 3,
        school: "Transmutation",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S",
        duration: "Concentration, up to 1 hour",
        description: "A nonmagical weapon you touch becomes a magic weapon. Choose one of the following damage types: acid, cold, fire, lightning, or thunder. For the duration, the weapon has a +1 bonus to attack rolls and deals an extra 1d4 damage of the chosen type when it hits.",
        higherLevels: "When you cast this spell using a spell slot of 5th or 6th level, the bonus to attack rolls increases to +2 and the extra damage increases to 2d4. When you use a spell slot of 7th level or higher, the bonus increases to +3 and the extra damage increases to 3d4."
    },

    "fly": {
        name: "Fly",
        level: 3,
        school: "Transmutation",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S, M (a wing feather from any bird)",
        duration: "Concentration, up to 10 minutes",
        description: "You touch a willing creature. The target gains a flying speed of 60 feet for the duration. When the spell ends, the target falls if it is still aloft, unless it can stop the fall.",
        higherLevels: "When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature for each slot level above 3rd."
    },

    "gaseous form": {
        name: "Gaseous Form",
        level: 3,
        school: "Transmutation",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S, M (a bit of gauze and a wisp of smoke)",
        duration: "Concentration, up to 1 hour",
        description: "You transform a willing creature you touch, along with everything it's wearing and carrying, into a misty cloud for the duration. The spell ends if the creature drops to 0 hit points. An incorporeal creature isn't affected. While in this form, the target's only method of movement is a flying speed of 10 feet. The target can enter and occupy the space of another creature. The target has resistance to nonmagical damage, and it has advantage on Strength, Dexterity, and Constitution saving throws. The target can pass through small holes, narrow openings, and even mere cracks."
    },

    "glyph of warding": {
        name: "Glyph of Warding",
        level: 3,
        school: "Abjuration",
        castingTime: "1 hour",
        range: "Touch",
        components: "V, S, M (incense and powdered diamond worth at least 200 gp, which the spell consumes)",
        duration: "Until dispelled or triggered",
        description: "When you cast this spell, you inscribe a glyph that harms other creatures, either upon a surface (such as a table or a section of floor or wall) or within an object that can be closed (such as a book, a scroll, or a treasure chest) to conceal the glyph. If you choose a surface, the glyph can cover an area of the surface no larger than 10 feet in diameter. If you choose an object, that object must remain in its place; if the object is moved more than 10 feet from where you cast this spell, the glyph is broken, and the spell ends without being triggered."
    },

    "haste": {
        name: "Haste",
        level: 3,
        school: "Transmutation",
        castingTime: "1 action",
        range: "30 feet",
        components: "V, S, M (a shaving of licorice root)",
        duration: "Concentration, up to 1 minute",
        description: "Choose a willing creature that you can see within range. Until the spell ends, the target's speed is doubled, it gains a +2 bonus to AC, it has advantage on Dexterity saving throws, and it gains an additional action on each of its turns. That action can be used only to take the Attack (one weapon attack only), Dash, Disengage, Hide, or Use an Object action. When the spell ends, the target can't move or take actions until after its next turn, as a wave of lethargy sweeps over it."
    },

    "hunger of hadar": {
        name: "Hunger of Hadar",
        level: 3,
        school: "Conjuration",
        castingTime: "1 action",
        range: "150 feet",
        components: "V, S, M (a pickled octopus tentacle)",
        duration: "Concentration, up to 1 minute",
        description: "You open a gateway to the dark between the stars, a region infested with unknown horrors. A 20-foot-radius sphere of blackness and bitter cold appears, centered on a point with range and lasting for the duration. This void is filled with a cacophony of soft whispers and slurping noises that can be heard up to 30 feet away. No light, magical or otherwise, can illuminate the area, and creatures fully within the area are blinded. The void creates a warp in the fabric of space, and the area is difficult terrain. Any creature that starts its turn in the area takes 2d6 cold damage. Any creature that ends its turn in the area must succeed on a Dexterity saving throw or take 2d6 acid damage as milky, otherworldly tentacles rub against it."
    },

    "lightning bolt": {
        name: "Lightning Bolt",
        level: 3,
        school: "Evocation",
        castingTime: "1 action",
        range: "Self (100-foot line)",
        components: "V, S, M (a bit of fur and a rod of amber, crystal, or glass)",
        duration: "Instantaneous",
        description: "A stroke of lightning forming a line 100 feet long and 5 feet wide blasts out from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 8d6 lightning damage on a failed save, or half as much damage on a successful one. The lightning ignites flammable objects in the area that aren't being worn or carried.",
        higherLevels: "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd."
    },

    "magic circle": {
        name: "Magic Circle",
        level: 3,
        school: "Abjuration",
        castingTime: "1 minute",
        range: "10 feet",
        components: "V, S, M (holy water or powdered silver and iron worth at least 100 gp, which the spell consumes)",
        duration: "1 hour",
        description: "You create a 10-foot-radius, 20-foot-tall cylinder of magical energy centered on a point on the ground that you can see within range. Glowing runes appear wherever the cylinder intersects with the floor or other surface. Choose one or more of the following types of creatures: celestials, elementals, fey, fiends, or undead. The circle affects a creature of the chosen type in the following ways: The creature can't willingly enter the cylinder by nonmagical means. The creature has disadvantage on attack rolls against targets within the cylinder. Targets within the cylinder can't be charmed, frightened, or possessed by the creature.",
        higherLevels: "When you cast this spell using a spell slot of 4th level or higher, the duration increases by 1 hour for each slot level above 3rd."
    },

    "major image": {
        name: "Major Image",
        level: 3,
        school: "Illusion",
        castingTime: "1 action",
        range: "120 feet",
        components: "V, S, M (a bit of fleece)",
        duration: "Concentration, up to 10 minutes",
        description: "You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 20-foot cube. The image appears at a spot that you can see within range and lasts for the duration. It seems completely real, including sounds, smells, and temperature appropriate to the thing depicted. You can't create sufficient heat or cold to cause damage, a sound loud enough to deal thunder damage or deafen a creature, or a smell that might sicken a creature (like a troglodyte's stench). As long as you are within range of the illusion, you can use your action to cause the image to move to any other spot within range.",
        higherLevels: "When you cast this spell using a spell slot of 6th level or higher, the spell lasts until dispelled, without requiring your concentration."
    },

    "meld into stone": {
        name: "Meld into Stone",
        level: 3,
        school: "Transmutation",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S",
        duration: "8 hours",
        description: "You step into a stone object or surface large enough to fully contain your body, melding yourself and all the equipment you carry with the stone for the duration. Using your movement, you step into the stone at a point you can touch. Nothing of your presence remains visible or otherwise detectable by nonmagical senses. While merged with the stone, you can't see what occurs outside it, and any Wisdom (Perception) checks you make to hear sounds outside it are made with disadvantage. You remain aware of the passage of time and can cast spells on yourself while merged in the stone."
    },

    "nondetection": {
        name: "Nondetection",
        level: 3,
        school: "Abjuration",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S, M (a pinch of diamond dust worth 25 gp sprinkled over the target, which the spell consumes)",
        duration: "8 hours",
        description: "For the duration, you hide a target that you touch from divination magic. The target can be a willing creature or a place or an object no larger than 10 feet in any dimension. The target can't be targeted by any divination magic or perceived through magical scrying sensors."
    },

    "phantom steed": {
        name: "Phantom Steed",
        level: 3,
        school: "Illusion",
        castingTime: "1 minute",
        range: "30 feet",
        components: "V, S",
        duration: "1 hour",
        description: "A Large quasi-real, horselike creature appears on the ground in an unoccupied space of your choice within range. You decide the creature's appearance, but it is equipped with a saddle, bit, and bridle. Any of the equipment created by the spell vanishes in a puff of smoke if it is carried more than 10 feet away from the steed. For the duration, you or a creature you choose can ride the steed. The creature uses the statistics for a riding horse, except it has a speed of 100 feet and can travel 10 miles in an hour, or 13 miles at a fast pace."
    },

    "plant growth": {
        name: "Plant Growth",
        level: 3,
        school: "Transmutation",
        castingTime: "1 action or 8 hours",
        range: "150 feet",
        components: "V, S",
        duration: "Instantaneous",
        description: "This spell channels vitality into plants within a specific area. There are two possible uses for the spell, granting either immediate or long-term benefits. If you cast this spell using 1 action, choose a point within range. All normal plants in a 100-foot radius centered on that point become thick and overgrown. A creature moving through the area must spend 4 feet of movement for every 1 foot it moves. You can exclude one or more areas of any size within the spell's area from being affected. If you cast this spell over 8 hours, you enrich the land. All plants in a half-mile radius centered on a point within range become enriched for 1 year."
    },

    "protection from energy": {
        name: "Protection from Energy",
        level: 3,
        school: "Abjuration",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S",
        duration: "Concentration, up to 1 hour",
        description: "For the duration, the willing creature you touch has resistance to one damage type of your choice: acid, cold, fire, lightning, or thunder."
    },

    "sleet storm": {
        name: "Sleet Storm",
        level: 3,
        school: "Conjuration",
        castingTime: "1 action",
        range: "150 feet",
        components: "V, S, M (a pinch of dust and a few drops of water)",
        duration: "Concentration, up to 1 minute",
        description: "Until the spell ends, freezing rain and sleet fall in a 20-foot-tall cylinder with a 40-foot radius centered on a point you choose within range. The area is heavily obscured, and exposed flames in the area are doused. The ground in the area is covered with slick ice, making it difficult terrain. When a creature enters the spell's area for the first time on a turn or starts its turn there, it must make a Dexterity saving throw. On a failed save, it falls prone. If a creature is concentrating in the spell's area, the creature must make a successful Constitution saving throw against your spell save DC or lose concentration."
    },

    "slow": {
        name: "Slow",
        level: 3,
        school: "Transmutation",
        castingTime: "1 action",
        range: "120 feet",
        components: "V, S, M (a drop of molasses)",
        duration: "Concentration, up to 1 minute",
        description: "You alter time around up to six creatures of your choice in a 40-foot cube within range. Each target must succeed on a Wisdom saving throw or be affected by this spell for the duration. An affected target's speed is halved, it takes a −2 penalty to AC and Dexterity saving throws, and it can't use reactions. On its turn, it can use either an action or a bonus action, not both. Regardless of the creature's abilities or magic items, it can't make more than one melee or ranged attack during its turn."
    },

    "spirit guardians": {
        name: "Spirit Guardians",
        level: 3,
        school: "Conjuration",
        castingTime: "1 action",
        range: "Self (15-foot radius)",
        components: "V, S, M (a holy symbol)",
        duration: "Concentration, up to 10 minutes",
        description: "You call forth spirits to protect you. They flit around you to a distance of 15 feet for the duration. If you are good or neutral, their spectral form appears angelic or fey (your choice). If you are evil, they appear fiendish. When you cast this spell, you can designate any number of creatures you can see to be unaffected by it. An affected creature's speed is halved in the area, and when the creature enters the area for the first time on a turn or starts its turn there, it must make a Wisdom saving throw. On a failed save, the creature takes 3d8 radiant damage (if you are good or neutral) or 3d8 necrotic damage (if you are evil). On a successful save, the creature takes half as much damage.",
        higherLevels: "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd."
    },

    "stinking cloud": {
        name: "Stinking Cloud",
        level: 3,
        school: "Conjuration",
        castingTime: "1 action",
        range: "90 feet",
        components: "V, S, M (a rotten egg or several skunk cabbage leaves)",
        duration: "Concentration, up to 1 minute",
        description: "You create a 20-foot-radius sphere of yellow, nauseating gas centered on a point within range. The cloud spreads around corners, and its area is heavily obscured. The cloud lingers in the air for the duration. Each creature that is completely within the cloud at the start of its turn must make a Constitution saving throw against poison. On a failed save, the creature spends its action that turn retching and reeling. Creatures that don't need to breathe or are immune to poison automatically succeed on this saving throw."
    },

    "tongues": {
        name: "Tongues",
        level: 3,
        school: "Divination",
        castingTime: "1 action",
        range: "Touch",
        components: "V, M (a small clay model of a ziggurat)",
        duration: "1 hour",
        description: "This spell grants the creature you touch the ability to understand any spoken language it hears. Moreover, when the target speaks, any creature that knows at least one language and can hear the target understands what it says."
    },

    "vampiric touch": {
        name: "Vampiric Touch",
        level: 3,
        school: "Necromancy",
        castingTime: "1 action",
        range: "Self",
        components: "V, S",
        duration: "Concentration, up to 1 minute",
        description: "The touch of your shadow-wreathed hand can siphon life force from others to heal your wounds. Make a melee spell attack against a creature within your reach. On a hit, the target takes 3d6 necrotic damage, and you regain hit points equal to half the amount of necrotic damage dealt. Until the spell ends, you can make the attack again on each of your turns as an action.",
        higherLevels: "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd."
    },

    "water breathing": {
        name: "Water Breathing",
        level: 3,
        school: "Transmutation",
        castingTime: "1 action",
        range: "30 feet",
        components: "V, S, M (a short reed or piece of straw)",
        duration: "24 hours",
        description: "This spell grants up to ten willing creatures you can see within range the ability to breathe underwater until the spell ends. Affected creatures also retain their normal mode of respiration."
    },

    "water walk": {
        name: "Water Walk",
        level: 3,
        school: "Transmutation",
        castingTime: "1 action",
        range: "30 feet",
        components: "V, S, M (a piece of cork)",
        duration: "1 hour",
        description: "This spell grants the ability to move across any liquid surface—such as water, acid, mud, snow, quicksand, or lava—as if it were harmless solid ground (creatures crossing molten lava can still take damage from the heat). Up to ten willing creatures you can see within range gain this ability for the duration. If you target a creature submerged in a liquid, the spell carries the target to the surface of the liquid at a rate of 60 feet per round."
    },

    "wind wall": {
        name: "Wind Wall",
        level: 3,
        school: "Evocation",
        castingTime: "1 action",
        range: "120 feet",
        components: "V, S, M (a tiny fan and a feather of exotic origin)",
        duration: "Concentration, up to 1 minute",
        description: "A wall of strong wind rises from the ground at a point you choose within range. You can make the wall up to 50 feet long, 15 feet high, and 1 foot thick. You can shape the wall in any way you choose so long as it makes one continuous path along the ground. The wall lasts for the duration. When the wall appears, each creature within its area must make a Strength saving throw. A creature takes 3d8 bludgeoning damage on a failed save, or half as much damage on a successful one. The strong wind keeps fog, smoke, and other gases at bay. Small or smaller flying creatures or objects can't pass through the wall."
    },

    // Additional Level 4 Spells
    "banishment": {
        name: "Banishment",
        level: 4,
        school: "Abjuration",
        castingTime: "1 action",
        range: "60 feet",
        components: "V, S, M (an item distasteful to the target)",
        duration: "Concentration, up to 1 minute",
        description: "You attempt to send one creature that you can see within range to another plane of existence. The target must succeed on a Charisma saving throw or be banished. If the target is native to the plane of existence you're on, you banish the target to a harmless demiplane. While there, the target is incapacitated. The target remains there until the spell ends, at which point the target reappears in the space it left or in the nearest unoccupied space if that space is occupied. If the target is native to a different plane of existence than the one you're on, the target is banished with a faint popping noise, returning to its home plane.",
        higherLevels: "When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th."
    },

    "blight": {
        name: "Blight",
        level: 4,
        school: "Necromancy",
        castingTime: "1 action",
        range: "30 feet",
        components: "V, S",
        duration: "Instantaneous",
        description: "Necromantic energy washes over a creature of your choice that you can see within range, draining moisture and vitality from it. The target must make a Constitution saving throw. The target takes 8d8 necrotic damage on a failed save, or half as much damage on a successful one. This spell has no effect on undead or constructs. If you target a plant creature or a magical plant, it makes the saving throw with disadvantage, and the spell deals maximum damage to it. If you target a nonmagical plant that isn't a creature, such as a tree or shrub, it doesn't make a saving throw; it simply withers and dies.",
        higherLevels: "When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d8 for each slot level above 4th."
    },

    "confusion": {
        name: "Confusion",
        level: 4,
        school: "Enchantment",
        castingTime: "1 action",
        range: "90 feet",
        components: "V, S, M (three nut shells)",
        duration: "Concentration, up to 1 minute",
        description: "This spell assaults and twists creatures' minds, spawning delusions and provoking uncontrolled action. Each creature in a 10-foot-radius sphere centered on a point you choose within range must succeed on a Wisdom saving throw when you cast this spell or be affected by it. An affected target can't take reactions and must roll a d10 at the start of each of its turns to determine its behavior for that turn."
    },

    "conjure minor elementals": {
        name: "Conjure Minor Elementals",
        level: 4,
        school: "Conjuration",
        castingTime: "1 minute",
        range: "90 feet",
        components: "V, S",
        duration: "Concentration, up to 1 hour",
        description: "You summon elementals that appear in unoccupied spaces that you can see within range. Choose one of the following options for what appears: One elemental of challenge rating 2 or lower, Two elementals of challenge rating 1 or lower, Four elementals of challenge rating 1/2 or lower, Eight elementals of challenge rating 1/4 or lower. An elemental summoned by this spell disappears when it drops to 0 hit points or when the spell ends.",
        higherLevels: "When you cast this spell using certain higher-level spell slots, you choose one of the summoning options above, and more creatures appear: twice as many with a 6th-level slot and three times as many with an 8th-level slot."
    },

    "conjure woodland beings": {
        name: "Conjure Woodland Beings",
        level: 4,
        school: "Conjuration",
        castingTime: "1 action",
        range: "60 feet",
        components: "V, S, M (one holly berry per creature summoned)",
        duration: "Concentration, up to 1 hour",
        description: "You summon fey creatures that appear in unoccupied spaces that you can see within range. Choose one of the following options for what appears: One fey creature of challenge rating 2 or lower, Two fey creatures of challenge rating 1 or lower, Four fey creatures of challenge rating 1/2 or lower, Eight fey creatures of challenge rating 1/4 or lower. A summoned creature disappears when it drops to 0 hit points or when the spell ends.",
        higherLevels: "When you cast this spell using certain higher-level spell slots, you choose one of the summoning options above, and more creatures appear: twice as many with a 6th-level slot and three times as many with an 8th-level slot."
    },

    "death ward": {
        name: "Death Ward",
        level: 4,
        school: "Abjuration",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S",
        duration: "8 hours",
        description: "You touch a creature and grant it a measure of protection from death. The first time the target would drop to 0 hit points as a result of taking damage, the target instead drops to 1 hit point, and the spell ends. If the spell is still in effect when the target is subjected to an effect that would kill it instantaneously without dealing damage, that effect is instead negated against the target, and the spell ends."
    },

    "dimension door": {
        name: "Dimension Door",
        level: 4,
        school: "Conjuration",
        castingTime: "1 action",
        range: "500 feet",
        components: "V",
        duration: "Instantaneous",
        description: "You teleport yourself from your current location to any other spot within range. You arrive at exactly the spot desired. It can be a place you can see, one you can visualize, or one you can describe by stating distance and direction, such as '200 feet straight downward' or 'upward to the northwest at a 45-degree angle, 300 feet.' You can bring along objects as long as their weight doesn't exceed what you can carry. You can also bring one willing creature of your size or smaller who is carrying gear up to its carrying capacity. The creature must be within 5 feet of you when you cast this spell."
    },

    "dominate beast": {
        name: "Dominate Beast",
        level: 4,
        school: "Enchantment",
        castingTime: "1 action",
        range: "60 feet",
        components: "V, S",
        duration: "Concentration, up to 1 minute",
        description: "You attempt to beguile a beast that you can see within range. It must succeed on a Wisdom saving throw or be charmed by you for the duration. If you or creatures that are friendly to you are fighting it, it has advantage on the saving throw. While the beast is charmed, you have a telepathic link with it as long as the two of you are on the same plane of existence. You can use this telepathic link to issue commands to the creature while you are conscious (no action required), which it does its best to obey.",
        higherLevels: "When you cast this spell with a 5th-level spell slot, the duration is concentration, up to 10 minutes. When you use a 6th-level spell slot, the duration is concentration, up to 1 hour. When you use a spell slot of 7th level or higher, the duration is concentration, up to 8 hours."
    },

    "fire shield": {
        name: "Fire Shield",
        level: 4,
        school: "Evocation",
        castingTime: "1 action",
        range: "Self",
        components: "V, S, M (a bit of phosphorus or a firefly)",
        duration: "10 minutes",
        description: "Thin and wispy flames wreathe your body for the duration, shedding bright light in a 10-foot radius and dim light for an additional 10 feet. You can end the spell early by using an action to dismiss it. The flames provide you with a warm shield or a chill shield, as you choose. The warm shield grants you resistance to cold damage, and the chill shield grants you resistance to fire damage. In addition, whenever a creature within 5 feet of you hits you with a melee attack, the shield erupts with flame. The attacker takes 2d8 fire damage from a warm shield, or 2d8 cold damage from a cold shield."
    },

    "greater invisibility": {
        name: "Greater Invisibility",
        level: 4,
        school: "Illusion",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S",
        duration: "Concentration, up to 1 minute",
        description: "You or a creature you touch becomes invisible until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the target's person."
    },

    "guardian of faith": {
        name: "Guardian of Faith",
        level: 4,
        school: "Conjuration",
        castingTime: "1 action",
        range: "30 feet",
        components: "V",
        duration: "8 hours",
        description: "A Large spectral guardian appears and hovers for the duration in an unoccupied space of your choice that you can see within range. The guardian occupies that space and is indistinct except for a gleaming sword and shield emblazoned with the symbol of your deity. Any creature hostile to you that moves to a space within 10 feet of the guardian for the first time on a turn must succeed on a Dexterity saving throw. The creature takes 20 radiant damage on a failed save, or half as much damage on a successful one. The guardian vanishes when it has dealt a total of 60 damage."
    },

    "hallucinatory terrain": {
        name: "Hallucinatory Terrain",
        level: 4,
        school: "Illusion",
        castingTime: "10 minutes",
        range: "300 feet",
        components: "V, S, M (a stone, a twig, and a bit of green plant)",
        duration: "24 hours",
        description: "You make natural terrain in a 150-foot cube in range look, sound, and smell like some other sort of natural terrain. Thus, open fields or a road can be made to resemble a swamp, hill, crevasse, or some other difficult or impassable terrain. A pond can be made to seem like a grassy meadow, a precipice like a gentle slope, or a rock-strewn gully like a wide and smooth road. Manufactured structures, equipment, and creatures within the area aren't changed in appearance."
    },

    "ice storm": {
        name: "Ice Storm",
        level: 4,
        school: "Evocation",
        castingTime: "1 action",
        range: "300 feet",
        components: "V, S, M (a pinch of dust and a few drops of water)",
        duration: "Instantaneous",
        description: "A hail of rock-hard ice pounds to the ground in a 20-foot-radius, 40-foot-high cylinder centered on a point within range. Each creature in the cylinder must make a Dexterity saving throw. A creature takes 2d8 bludgeoning damage and 4d6 cold damage on a failed save, or half as much damage on a successful one. Hailstones turn the storm's area of effect into difficult terrain until the end of your next turn.",
        higherLevels: "When you cast this spell using a spell slot of 5th level or higher, the bludgeoning damage increases by 1d8 for each slot level above 4th."
    },

    "phantasmal killer": {
        name: "Phantasmal Killer",
        level: 4,
        school: "Illusion",
        castingTime: "1 action",
        range: "120 feet",
        components: "V, S",
        duration: "Concentration, up to 1 minute",
        description: "You tap into the nightmares of a creature you can see within range and create an illusory manifestation of its deepest fears, visible only to that creature. The target must make a Wisdom saving throw. On a failed save, the target becomes frightened for the duration. At the end of each of the target's turns before the spell ends, the target must succeed on a Wisdom saving throw or take 4d10 psychic damage. On a successful save, the spell ends.",
        higherLevels: "When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d10 for each slot level above 4th."
    },

    "polymorph": {
        name: "Polymorph",
        level: 4,
        school: "Transmutation",
        castingTime: "1 action",
        range: "60 feet",
        components: "V, S, M (a caterpillar cocoon)",
        duration: "Concentration, up to 1 hour",
        description: "This spell transforms a creature that you can see within range into a new form. An unwilling creature must make a Wisdom saving throw to avoid the effect. The spell has no effect on a shapeshifter or a creature with 0 hit points. The transformation lasts for the duration, or until the target drops to 0 hit points or dies. The new form can be any beast whose challenge rating is equal to or less than the target's (or the target's level, if it doesn't have a challenge rating). The target's game statistics, including mental ability scores, are replaced by the statistics of the chosen beast. It retains its alignment and personality."
    },

    "stone shape": {
        name: "Stone Shape",
        level: 4,
        school: "Transmutation",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S, M (soft clay, which must be worked into roughly the desired shape of the stone object)",
        duration: "Instantaneous",
        description: "You touch a stone object of Medium size or smaller or a section of stone no more than 5 feet in any dimension and form it into any shape that suits your purpose. So, for example, you could shape a large rock into a weapon, idol, or coffer, or make a small passage through a wall, as long as the wall is less than 5 feet thick. You could also shape a stone door or its frame to seal the door shut. The object you create can have up to two hinges and a latch, but finer mechanical detail isn't possible."
    },

    "stoneskin": {
        name: "Stoneskin",
        level: 4,
        school: "Abjuration",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S, M (diamond dust worth 100 gp, which the spell consumes)",
        duration: "Concentration, up to 1 hour",
        description: "This spell turns the flesh of a willing creature you touch as hard as stone. Until the spell ends, the target has resistance to nonmagical bludgeoning, piercing, and slashing damage."
    },

    "wall of fire": {
        name: "Wall of Fire",
        level: 4,
        school: "Evocation",
        castingTime: "1 action",
        range: "120 feet",
        components: "V, S, M (a small piece of phosphorus)",
        duration: "Concentration, up to 1 minute",
        description: "You create a wall of fire on a solid surface within range. You can make the wall up to 60 feet long, 20 feet high, and 1 foot thick, or a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick. The wall is opaque and lasts for the duration. When the wall appears, each creature within its area must make a Dexterity saving throw. On a failed save, a creature takes 5d8 fire damage, or half as much damage on a successful save. One side of the wall, selected by you when you cast this spell, deals 5d8 fire damage to each creature that ends its turn within 10 feet of that side or inside the wall.",
        higherLevels: "When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d8 for each slot level above 4th."
    },

    // Additional Level 5+ Spells
    "antilife shell": {
        name: "Antilife Shell",
        level: 5,
        school: "Abjuration",
        castingTime: "1 action",
        range: "Self (10-foot radius)",
        components: "V, S",
        duration: "Concentration, up to 1 hour",
        description: "A shimmering barrier extends out from you in a 10-foot radius and moves with you, remaining centered on you and hedging out creatures other than undead and constructs. The barrier lasts for the duration. The barrier prevents an affected creature from passing or reaching through. An affected creature can cast spells or make attacks with ranged or reach weapons through the barrier. If you move so that an affected creature is forced to pass through the barrier, the spell ends."
    },

    "cloudkill": {
        name: "Cloudkill",
        level: 5,
        school: "Conjuration",
        castingTime: "1 action",
        range: "120 feet",
        components: "V, S",
        duration: "Concentration, up to 10 minutes",
        description: "You create a 20-foot-radius sphere of poisonous, yellow-green fog centered on a point you choose within range. The fog spreads around corners. It lasts for the duration or until strong wind disperses the fog, ending the spell. Its area is heavily obscured. When a creature enters the spell's area for the first time on a turn or starts its turn there, that creature must make a Constitution saving throw. The creature takes 5d8 poison damage on a failed save, or half as much damage on a successful one. Creatures are affected even if they hold their breath or don't need to breathe.",
        higherLevels: "When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th."
    },

    "cone of cold": {
        name: "Cone of Cold",
        level: 5,
        school: "Evocation",
        castingTime: "1 action",
        range: "Self (60-foot cone)",
        components: "V, S, M (a small crystal or glass cone)",
        duration: "Instantaneous",
        description: "A blast of cold air erupts from your hands. Each creature in a 60-foot cone must make a Constitution saving throw. A creature takes 8d8 cold damage on a failed save, or half as much damage on a successful one. A creature killed by this spell becomes a frozen statue until it thaws.",
        higherLevels: "When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th."
    },

    "conjure elemental": {
        name: "Conjure Elemental",
        level: 5,
        school: "Conjuration",
        castingTime: "1 minute",
        range: "90 feet",
        components: "V, S, M (burning incense for air, soft clay for earth, sulfur and phosphorus for fire, or water and sand for water)",
        duration: "Concentration, up to 1 hour",
        description: "You call forth an elemental servant. Choose an area of air, earth, fire, or water that fills a 10-foot cube within range. An elemental of challenge rating 5 or lower appropriate to the area you chose appears in an unoccupied space within 10 feet of it. For example, a fire elemental emerges from a bonfire, and an earth elemental rises up from the ground. The elemental disappears when it drops to 0 hit points or when the spell ends.",
        higherLevels: "When you cast this spell using a spell slot of 6th level or higher, the challenge rating increases by 1 for each slot level above 5th."
    },

    "dispel evil and good": {
        name: "Dispel Evil and Good",
        level: 5,
        school: "Abjuration",
        castingTime: "1 action",
        range: "Self",
        components: "V, S, M (holy water or powdered silver and iron)",
        duration: "Concentration, up to 1 minute",
        description: "Shimmering energy surrounds and protects you from fey, undead, and creatures originating from beyond the Material Plane. For the duration, celestials, elementals, fey, fiends, and undead have disadvantage on attack rolls against you. You can end the spell early by using either of the following special functions. Break Enchantment. As your action, you touch a creature you can reach that is charmed, frightened, or possessed by a celestial, an elemental, a fey, a fiend, or an undead. The creature you touch is no longer charmed, frightened, or possessed by such creatures. Dismissal. As your action, make a melee spell attack against a celestial, an elemental, a fey, a fiend, or an undead you can reach."
    },

    "dominate person": {
        name: "Dominate Person",
        level: 5,
        school: "Enchantment",
        castingTime: "1 action",
        range: "60 feet",
        components: "V, S",
        duration: "Concentration, up to 1 minute",
        description: "You attempt to beguile a humanoid that you can see within range. It must succeed on a Wisdom saving throw or be charmed by you for the duration. If you or creatures that are friendly to you are fighting it, it has advantage on the saving throw. While the target is charmed, you have a telepathic link with it as long as the two of you are on the same plane of existence. You can use this telepathic link to issue commands to the creature while you are conscious (no action required), which it does its best to obey.",
        higherLevels: "When you cast this spell using a 6th-level spell slot, the duration is concentration, up to 10 minutes. When you use a 7th-level spell slot, the duration is concentration, up to 1 hour. When you use a spell slot of 8th level or higher, the duration is concentration, up to 8 hours."
    },

    "flame strike": {
        name: "Flame Strike",
        level: 5,
        school: "Evocation",
        castingTime: "1 action",
        range: "60 feet",
        components: "V, S, M (pinch of sulfur)",
        duration: "Instantaneous",
        description: "A vertical column of divine fire roars down from the heavens in a location you specify. Each creature in a 10-foot-radius, 40-foot-high cylinder centered on a point within range must make a Dexterity saving throw. A creature takes 4d6 fire damage and 4d6 radiant damage on a failed save, or half as much damage on a successful one.",
        higherLevels: "When you cast this spell using a spell slot of 6th level or higher, the fire damage or the radiant damage (your choice) increases by 1d6 for each slot level above 5th."
    },

    "geas": {
        name: "Geas",
        level: 5,
        school: "Enchantment",
        castingTime: "1 minute",
        range: "60 feet",
        components: "V",
        duration: "30 days",
        description: "You place a magical command on a creature that you can see within range, forcing it to carry out some service or refrain from some action or course of activity as you decide. If the creature can understand you, it must succeed on a Wisdom saving throw or become charmed by you for the duration. While the creature is charmed by you, it takes 5d10 psychic damage each time it acts in a manner directly counter to your instructions, but no more than once each day. A creature that can't understand you is unaffected by the spell.",
        higherLevels: "When you cast this spell using a spell slot of 7th or 8th level, the duration is 1 year. When you cast this spell using a spell slot of 9th level, the spell lasts until it is ended by one of the spells mentioned above."
    },

    "hold monster": {
        name: "Hold Monster",
        level: 5,
        school: "Enchantment",
        castingTime: "1 action",
        range: "90 feet",
        components: "V, S, M (a small, straight piece of iron)",
        duration: "Concentration, up to 1 minute",
        description: "Choose a creature that you can see within range. The target must succeed on a Wisdom saving throw or be paralyzed for the duration. This spell has no effect on undead. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target.",
        higherLevels: "When you cast this spell using a spell slot of 6th level or higher, you can target one additional creature for each slot level above 5th. The creatures must be within 30 feet of each other when you target them."
    },

    "insect plague": {
        name: "Insect Plague",
        level: 5,
        school: "Conjuration",
        castingTime: "1 action",
        range: "300 feet",
        components: "V, S, M (a few grains of sugar, some kernels of grain, and a smear of fat)",
        duration: "Concentration, up to 10 minutes",
        description: "Swarming, biting locusts fill a 20-foot-radius sphere centered on a point you choose within range. The sphere spreads around corners. The sphere remains for the duration, and its area is lightly obscured. The sphere's area is difficult terrain. When the area appears, each creature in it must make a Constitution saving throw. A creature takes 4d10 piercing damage on a failed save, or half as much damage on a successful one. A creature must also make this saving throw when it enters the spell's area for the first time on a turn or ends its turn there.",
        higherLevels: "When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d10 for each slot level above 5th."
    },

    "mass cure wounds": {
        name: "Mass Cure Wounds",
        level: 5,
        school: "Evocation",
        castingTime: "1 action",
        range: "60 feet",
        components: "V, S",
        duration: "Instantaneous",
        description: "A wave of healing energy washes out from a point of your choice within range. Choose up to six creatures in a 30-foot-radius sphere centered on that point. Each target regains hit points equal to 3d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs.",
        higherLevels: "When you cast this spell using a spell slot of 6th level or higher, the healing increases by 1d8 for each slot level above 5th."
    },

    "planar binding": {
        name: "Planar Binding",
        level: 5,
        school: "Abjuration",
        castingTime: "1 hour",
        range: "60 feet",
        components: "V, S, M (a jewel worth at least 1,000 gp, which the spell consumes)",
        duration: "24 hours",
        description: "With this spell, you attempt to bind a celestial, an elemental, a fey, or a fiend to your service. The creature must be within range for the entire casting of the spell. (Typically, the creature is first summoned into the center of an inverted magic circle in order to keep it trapped while this spell is cast.) At the completion of the casting, the target must make a Charisma saving throw. On a failed save, it is bound to serve you for the duration.",
        higherLevels: "When you cast this spell using a spell slot of a higher level, the duration increases to 10 days with a 6th-level slot, to 30 days with a 7th-level slot, to 180 days with an 8th-level slot, and to a year and a day with a 9th-level spell slot."
    },

    "raise dead": {
        name: "Raise Dead",
        level: 5,
        school: "Necromancy",
        castingTime: "1 hour",
        range: "Touch",
        components: "V, S, M (a diamond worth at least 500 gp, which the spell consumes)",
        duration: "Instantaneous",
        description: "You return a dead creature you touch to life, provided that it has been dead no longer than 10 days. If the creature's soul is both willing and at liberty to rejoin the body, the creature returns to life with 1 hit point. This spell also neutralizes any poisons and cures nonmagical diseases that affected the creature at the time it died. This spell doesn't, however, remove magical diseases, curses, or similar effects; if these aren't first removed prior to casting the spell, they take effect when the creature returns to life. This spell closes all mortal wounds, but it doesn't restore missing body parts."
    },

    "scrying": {
        name: "Scrying",
        level: 5,
        school: "Divination",
        castingTime: "10 minutes",
        range: "Self",
        components: "V, S, M (a focus worth at least 1,000 gp, such as a crystal ball, a silver mirror, or a font filled with holy water)",
        duration: "Concentration, up to 10 minutes",
        description: "You can see and hear a particular creature you choose that is on the same plane of existence as you. The target must make a Wisdom saving throw, which is modified by how well you know the target and the sort of physical connection you have to it. If a target knows you're casting this spell, it can fail the saving throw voluntarily if it wants to be observed. On a successful save, the target isn't affected, and you can't use this spell against it again for 24 hours."
    },

    "teleportation circle": {
        name: "Teleportation Circle",
        level: 5,
        school: "Conjuration",
        castingTime: "1 minute",
        range: "10 feet",
        components: "V, M (rare chalks and inks infused with precious gems with 50 gp, which the spell consumes)",
        duration: "1 round",
        description: "As you cast the spell, you draw a 10-foot-diameter circle on the ground inscribed with sigils that link your location to a permanent teleportation circle of your choice whose sigil sequence you know and that is on the same plane of existence as you. A shimmering portal opens within the circle you drew and remains open until the end of your next turn. Any creature that enters the portal instantly appears within 5 feet of the destination circle or in the nearest unoccupied space if that space is occupied."
    },

    "tree stride": {
        name: "Tree Stride",
        level: 5,
        school: "Conjuration",
        castingTime: "1 action",
        range: "Self",
        components: "V, S",
        duration: "Concentration, up to 1 minute",
        description: "You gain the ability to enter a tree and move from inside it to inside another tree of the same kind within 500 feet. Both trees must be living and at least the same size as you. You must use 5 feet of movement to enter a tree. You instantly know the location of all other trees of the same kind within 500 feet and, as part of the move used to enter the tree, can either pass into one of those trees or step out of the tree you're in. You appear in a spot of your choice within 5 feet of the destination tree, using another 5 feet of movement."
    },

    "wall of stone": {
        name: "Wall of Stone",
        level: 5,
        school: "Evocation",
        castingTime: "1 action",
        range: "120 feet",
        components: "V, S, M (a small block of granite)",
        duration: "Concentration, up to 10 minutes",
        description: "A nonmagical wall of solid stone springs into existence at a point you choose within range. The wall is 6 inches thick and is composed of ten 10-foot-by-10-foot panels. Each panel must be contiguous with at least one other panel. Alternatively, you can create 10-foot-by-20-foot panels that are only 3 inches thick. If the wall cuts through a creature's space when it appears, the creature is pushed to one side of the wall (your choice). If a creature would be surrounded on all sides by the wall (or the wall and another solid surface), that creature can make a Dexterity saving throw."
    }
};

// Merge additional spells into main spell data
Object.assign(window.spellsData, additionalSpells);

console.log(`✨ Additional SRD Spells Loaded: ${Object.keys(additionalSpells).length} new spells added`);
console.log(`📚 Total Spells Available: ${Object.keys(window.spellsData).length}`);
