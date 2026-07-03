# Cool Surfers Morocco — SEO Copy Rework
**For:** Claude Code in Cursor
**Goal:** Apply the text replacements below to the corresponding `.tsx` files. Each entry gives the exact file, the current string (`FIND`), and the replacement (`REPLACE`). Structure, components, styling, and layout are untouched — text content only.

**Source of truth used:** the live site at coolsurfersmorocco.com (Home, About Us, About Tamraght, Our Surf Spots, Our Surf House, Our Packages, Our Contacts). No new facts were invented — every change either (a) tightens/optimizes existing copy, or (b) pulls in a real detail already published on coolsurfersmorocco.com that was missing from the Vercel copy.

**SEO/LLM approach used throughout:**
- Work location keywords naturally into existing sentences (Tamraght, Taghazout Bay, Morocco, Agadir) instead of stuffing them.
- Prefer concrete, specific details (real amenities, real bathroom setups, real distances) over generic marketing adjectives — concrete facts are what both Google and LLM answer engines lift into summaries/snippets.
- Keep sentence lengths and line-break points close to original so `clamp()` typography and card heights don't break.
- Preserve brand voice ("crew", "vibe", casual tone) — SEO copy that reads like a keyword list hurts conversion and doesn't help LLM search either.

---

## ⚠️ Please verify before applying

1. **NAP consistency (Name/Address/Phone) — important for local SEO.** The official site lists:
   - Email: `info@coolsurfersmorocco.com`
   - WhatsApp: `+212 769-653725`
   - Instagram: `@cool_surfers_morocco`
   - Address: `Hay Tissaliouine, Tamraght 80750, Agadir, Morocco`

   Please confirm `data/site.ts` (`SITE.email`, `SITE.whatsappNumber`, `SITE.whatsappDisplay`, `SITE.address`, `SITE.instagramHandle`) matches exactly. Mismatched contact info across your own properties actively hurts local search ranking and can cause AI answer engines to surface the wrong number/address.

2. **Hamza's bio location.** Vercel currently says "Born and raised in Tamraght." The official site says he's "from the Taghazout area." I've corrected this below to match the official site — please confirm which is actually true and adjust if needed.

3. **Surf spot names.** `House.tsx` lists Banana Point, Crocro Beach, Devil's Rock, **Anza**, and **Panorama Point**. The official site's "Our Surf Spots" page lists Banana Point, Croco Beach, Devil's Rock, **K14**, and **K11/K12** — it does not mention Anza or Panorama Point. I have not touched the Anza/Panorama Point entries since I have no verified source for them. Recommend you either confirm they're real local names Cool Surfers actually surfs, or swap them for K14/K11/K12 to match your own official site.

4. **Files not shared** — `data/packages.ts` (PACKAGE_INCLUDED, ADD_ONS, DAILY_SCHEDULE, SEASONS) and `data/site.ts`. These contain guest-facing copy (what's included, add-on descriptions, the "When to come" seasonal blurbs, daily schedule). I pulled the real "When to come" and "Daily Schedule" text from the official site below in case it's useful — send me those two files and I'll rework them the same way.

---

## 1. `Home.tsx`

### Hero subtitle
```
FIND:
All-inclusive surf camp in Morocco. Daily coaching, great food, and people you'll never forget.<br />Starting from €290.

REPLACE:
All-inclusive surf camp in Tamraght, Taghazout Bay. Daily surf coaching, home-cooked Moroccan meals, and people you'll never forget.<br />From €290.
```
*Why: adds "Tamraght" and "Taghazout Bay" — the two location terms people and LLMs actually search for — plus "Moroccan meals" which is a real, distinct detail from the official site.*

### About preview — paragraph 1
```
FIND:
A few years ago, Hamza and Momo fell in love with sharing the ocean with people. They had been surfing Tamraght's waves since childhood — and teaching felt like the most natural next step.

REPLACE:
A few years ago, Hamza and Momo fell in love with sharing the ocean with people. They'd been surfing Tamraght's 20km stretch of coastline since childhood — teaching felt like the natural next step.
```
*Why: "20km stretch of coastline" is a real, specific detail from the official About Us page — concrete facts like this are exactly what AI answer engines quote.*

### About preview — paragraph 2
```
FIND:
Cool Surfers Morocco isn't just a business. It's a place where strangers become friends, where every meal is shared and every wave is celebrated. The kind of place you come back to.

REPLACE:
Cool Surfers Morocco isn't just a surf camp — it's a family. Every meal is shared, every wave is celebrated, and every guest leaves with people they'll stay in touch with.
```
*Why: works "surf camp" (a high-intent search term) naturally into the sentence.*

### Image alt text (About preview photo)
```
FIND:
alt="Cool Surfers Morocco team"

REPLACE:
alt="Cool Surfers Morocco surf camp team in Tamraght, Morocco"
```
*Why: alt text has no visual impact but is directly read by Google Images and LLM crawlers — free, safe keyword real estate.*

### Mosaic image alt texts
```
FIND:
{ src: IMAGES.homeMosaic1, alt: 'Banana Point', col: 1, row: '1 / 3', dir: 'left',  delay: 0 },
{ src: IMAGES.homeMosaic2, alt: 'Team Hamza',   col: 2, row: '1',     dir: 'up',    delay: 0.1 },
{ src: IMAGES.homeMosaic3, alt: 'Private room', col: 3, row: '1',     dir: 'right', delay: 0.15 },
{ src: IMAGES.homeMosaic4, alt: 'Fall surf',    col: 2, row: '2',     dir: 'up',    delay: 0.2 },
{ src: IMAGES.homeMosaic5, alt: 'Crocro Beach', col: 3, row: '2',     dir: 'right', delay: 0.25 },

REPLACE:
{ src: IMAGES.homeMosaic1, alt: 'Banana Point surf break, Tamraght', col: 1, row: '1 / 3', dir: 'left',  delay: 0 },
{ src: IMAGES.homeMosaic2, alt: 'Hamza, surf coach at Cool Surfers Morocco',   col: 2, row: '1',     dir: 'up',    delay: 0.1 },
{ src: IMAGES.homeMosaic3, alt: 'Private room at the Cool Surfers Morocco surf house', col: 3, row: '1',     dir: 'right', delay: 0.15 },
{ src: IMAGES.homeMosaic4, alt: 'Autumn surf session near Tamraght',    col: 2, row: '2',     dir: 'up',    delay: 0.2 },
{ src: IMAGES.homeMosaic5, alt: 'Crocro Beach surf spot, Taghazout Bay', col: 3, row: '2',     dir: 'right', delay: 0.25 },
```

---

## 2. `About.tsx`

### Hero subtitle
```
FIND:
Two local surfers, one shared dream. Meet the team that turns every stay into something you'll never forget.

REPLACE:
Two Tamraght surfers, one shared dream. Meet the local team behind every unforgettable stay.
```

### Origin story — paragraph 1
```
FIND:
Hamza and Momo grew up surfing the breaks around Tamraght. For them, the ocean wasn't just a sport — it was a language, a community. When they started teaching friends how to surf, something clicked.

REPLACE:
Hamza and Momo grew up surfing the breaks along Tamraght's 20km stretch of coastline. For them, the ocean wasn't just a sport — it was a language, a community, a way of life. When they started teaching friends to catch their first wave, something clicked.
```

### Origin story — paragraph 3
```
FIND:
Cool Surfers Morocco was born from that conviction: that everyone deserves to experience the magic of Morocco's waves, surrounded by warmth, good food, and genuine human connection.

REPLACE:
After years working at surf camps along the Moroccan coast, Hamza and Momo built Cool Surfers Morocco as the second home they'd always dreamed of — warm, welcoming, and open to anyone chasing the magic of Morocco's waves.
```
*Why: "years working at surf camps along the Moroccan coast" is a real experience detail from the official About Us page — it's also a strong E-E-A-T (experience/expertise) signal that both Google and LLMs weigh when deciding whether to trust and surface a local business.*

### Hamza bio
```
FIND:
Born and raised in Tamraght, Hamza has been reading these waves since he was a kid. His coaching style is patient, technical, and always fun. He has an extraordinary ability to find exactly the right wave for each person's level — and to make them laugh while doing it.

REPLACE:
From the Taghazout area, Hamza has a deep connection to the ocean and a calm, encouraging presence in the water. His coaching style is patient and technical, with a real gift for finding exactly the right wave for each surfer's level — and making them laugh while doing it.
```
*⚠️ See verification note #2 above — this corrects "Tamraght" to "Taghazout area" per the official site. Confirm and adjust if the official site is wrong instead.*

### Momo bio
```
FIND:
If Hamza is in the water, Momo is the heart of the house. He makes sure every guest feels at home from the moment they arrive — organizing the schedule, cooking up Moroccan feasts, and making sure no one ever sits alone. The camp's soul lives in him.

REPLACE:
With years of experience guiding surfers of all levels through camps along the coast, Momo brings a steady, relaxed energy that helps people progress without pressure. He makes sure every guest feels part of the family from day one — for him, surfing was always about more than technique: the moment, the vibe, and the people you share it with.
```
*Why: removed the unverified "cooking up Moroccan feasts" detail (not on the official site) and replaced with his actual documented surf-guiding experience, which also reinforces coaching credibility for SEO/trust purposes.*

### "Safety First, Always" value card
```
FIND:
Every session is supervised. Our coaches are trained in water safety and first aid. You focus on surfing — we handle the rest.

REPLACE:
Every session is supervised by experienced local coaches who know these waters inside out. You focus on surfing — we handle the rest.
```
*Why: "trained in water safety and first aid" isn't confirmed on the official site, so it's replaced with the verified claim ("experienced local instructors know these waters by heart" — official site wording).*

### About Tamraght — paragraph 1
```
FIND:
Tamraght is a peaceful local surf village set on the edge of Taghazout Bay. Here you're within walking distance of coffee shops, incredible Moroccan restaurants, and some of the best surf spots in North Africa.

REPLACE:
Tamraght is a peaceful, family-friendly surf village on the edge of Taghazout Bay — within walking distance of coffee shops, pharmacies, Moroccan restaurants, and some of the best surf spots in North Africa.
```
*Why: "family-friendly" and "pharmacies" are both real, official-site details that add useful practical/local detail without changing the sentence's length much.*

---

## 3. `House.tsx`

### Overview — paragraph 2
```
FIND:
Clean linens, fast WiFi, daily housekeeping, and communal spaces designed for exactly the kind of conversations that happen when strangers become friends.

REPLACE:
Clean linens and towels, fast WiFi, daily housekeeping, and communal spaces designed for exactly the kind of conversations that happen when strangers become friends.
```

### Triple Shared Room
```
FIND:
3 beds in a shared room. Perfect for solo travelers looking to connect and for groups of friends traveling together.

REPLACE:
Three beds in a spacious shared room — our most budget-friendly option. Perfect for solo travelers looking to find their tribe, or groups of friends staying together.
```

### Double Shared Room
```
FIND:
2 beds in a shared room. A bit more intimate. Great for two friends traveling together or couples who don't mind sharing.

REPLACE:
Two beds in a shared room, with the bathroom shared between just two rooms for extra quiet. Great for two friends traveling together, or couples who don't mind sharing.
```
*Why: "bathroom shared between just two rooms" is a real, specific detail from the official Surf House page — this kind of concrete detail is exactly what booking-intent searchers (and LLMs summarizing "what's the double room like") are looking for.*

### Private Room
```
FIND:
Your own space after long days in the ocean. Ideal for those who value privacy, or couples looking for a dedicated getaway.

REPLACE:
Your own space after long days in the ocean, with a private bathroom and a balcony to dry your wetsuit or watch the sunset over Tamraght. Ideal for couples or anyone who values privacy.
```
*Why: private bathroom + balcony + sunset-over-Tamraght view are all real details from the official Surf House page, previously missing from the Vercel copy entirely.*

### Banana Point
```
FIND:
A long, forgiving right-hander right in front of the house. Where you'll spend most mornings.

REPLACE:
A long, forgiving right-hander with a friendly local crowd — great for longboarders. Where you'll spend most mornings, right in front of the house.
```

### Crocro Beach
```
FIND:
Soft, rolling whitewash and a wide sandy beach. The go-to spot for first-timers finding their feet.

REPLACE:
Soft, rolling whitewash on a wide sandy beach with stunning Atlantic views — the go-to spot for first-timers finding their feet, and usually less crowded too.

TAG FIND: Mellow beach break · Beginners
TAG REPLACE: Mellow beach break · All levels
```
*Why: the official site describes this spot as suitable for beginners AND experienced surfers, so the tag is corrected for accuracy.*

### Devil's Rock
```
FIND:
A punchy reef break for experienced surfers chasing steeper, faster walls of water.

REPLACE:
Famous for consistent, powerful waves in a picturesque setting — a favorite with experienced surfers chasing steeper, faster walls of water.
```

---

## 4. `Packages.tsx`

### Hero subtitle
```
FIND:
Everything taken care of — transfers, food, surf coaching, and a house full of good people.

REPLACE:
Everything taken care of — transfers, meals, surf coaching, and a house full of good people.
```

### Reference: official "When to come?" copy (for `data/packages.ts` → `SEASONS`, if you share that file)
The official site's seasonal descriptions (temperature figures were blank placeholders on their CMS, so no numbers to pull — keep whatever real figures you currently use):
- **Summer:** low season for surfing — hot climate, spots busier with swimmers/beachgoers than surfers.
- **Spring:** weather warming up, surf inconsistent but calm — ideal for beginners or combining with yoga/volleyball.
- **Fall:** consistent waves with exciting swell — ideal for improving technique, busiest season with surfers from everywhere.
- **Winter:** tourism drops, waves stay consistent — bring a fleece, quieter season with great waves.

### Reference: official Daily Schedule (for `data/packages.ts` → `DAILY_SCHEDULE`, if you share that file)
```
08:30 — Breakfast
10:00 — Surf spot check (conditions + best waves of the day)
10:30 — Morning surf session (coaching or guiding)
13:00 — Lunch at the beach
14:00 — Free surf session or adventure
17:00 — Chill on the terrace, optional yoga or hammam visit
18:00 — Aperitif time, music, stories, sunset
20:00 — Dinner (Moroccan flavors, family style)
21:30 — Games, cards, board games
```
This matches your current `ScheduleItem` structure almost exactly — worth a quick diff against your data file to confirm it's still accurate.

---

## 5. `Contact.tsx` and `Booking.tsx`

No copy changes recommended — both are functional/transactional pages with minimal long-form SEO value, and none of their text conflicts with the official site. The one action item for both is the **NAP verification** in the warning section above, since `SITE.email`, `SITE.whatsappNumber`, and `SITE.address` feed both pages.

---

## Summary of what to do in Cursor

1. Open each file above in Claude Code.
2. For each `FIND` / `REPLACE` pair, do an exact-match find-and-replace (all strings are copied verbatim from your uploaded files, so they should match exactly once each).
3. Double-check the two flagged verification items (Hamza's location, surf spot names) before committing.
4. If you want `data/packages.ts` and `data/site.ts` optimized too, send them over and I'll produce the same kind of change list.
