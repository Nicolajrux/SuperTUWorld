# 🎮 SuperTUWorld – TU Berlin Scavenger Hunt

🌐 [Start the Hunt](https://nicolajrux.github.io/SuperTUWorld)

A fun and interactive scavenger hunt for TU Berlin students to explore the campus and take care of some essential organizational steps.  
Stops include the Unix Pool (to set up student accounts) and the library (to find welcome boxes for the semester start).

---

## 👨‍🏫 For Instructors

This repository contains all files necessary to run the scavenger hunt.

### 🗂 Structure

- `index.html`: The interactive map with mystery boxes.
- `html/page00X<PASSWORD>.html`: Subpages for each location. Each includes:
  - Info about the building.
  - A clue to the next location.
  - A riddle to solve to unlock the next step.

### 🛠 How to Set It Up

1. **Start students on a subpage**, e.g.: https://nicolajrux.github.io/SuperTUWorld/html/page000MATHEINI.html 
2. There, students find an image (e.g. a statue).
3. They read the caption and extract the **9th-to-last word**.
4. That word is the **PASSWORD** for the next location.
5. They return to the **main map** (`index.html`), click on the next box, and enter the PASSWORD.
6. Correct entry redirects them to the next page (`page001SAMOTHRAKE.html`, for example).
7. Repeat until they return to their starting point.

### 👥 Multiple Groups?

No problem. Just assign each group a different starting location page.

### 🏁 Final Step

Once all locations are completed, students:
- Go to a **computer** (not mobile).
- Open the main map (`index.html`).
- Use **arrow keys** to move Mario to the **math building**.
- A final purple box appears.
- They enter a final passcode: **the first letter of each PASSWORD**, in order (starting from the main building’s password).

> ✔️ **As instructor**, all you need to do is:
> - Explain how it works.
> - Provide the first page link.
> - Let them explore!

---

## 🧩 For Players

Follow these steps to complete the hunt:

1. Click a spinning box on the map to begin.
2. Visit the real-world location shown in the image.
3. Read the caption and solve the riddle.
4. You’ll get a **PASSWORD**.
5. Read the next **LOCATION** on the same page.
6. Return to the **main map**.
7. Click the new location and input the PASSWORD (all **CAPS**, no spaces).
8. If correct, you’ll reach the next location page.
9. Go there in real life and repeat!
10. When you return to your **starting point**, you're almost done.
11. On a **computer** (not phone/tablet), go to the main map.
12. Move Mario using arrow keys to the **math building**.
13. A purple box appears.
14. Enter the final code: **first letter of each PASSWORD**, starting with the one from the main building.
15. 🎉 Done! Congratulations!

---

Have fun exploring TU Berlin! ✨
