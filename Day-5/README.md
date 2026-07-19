### Day 05 – CSS Grid Initiatives Gallery

On **Day 5** of the **50 Days Dev Web Development Challenge**, I learned how to create structured two-dimensional layouts using **CSS Grid**. I transformed the Initiatives section into a clean project gallery by creating reusable initiative cards and organizing them inside a grid container.

Instead of manually adjusting widths and spacing, I used CSS Grid to build a mathematical layout system that automatically distributes available space. I implemented `display: grid` on the parent container and used `grid-template-columns: repeat(3, 1fr)` to create three equal columns. The `gap` property was used to maintain consistent spacing between cards, making the layout cleaner and easier to manage.

I also enhanced the card design by adding background colors, padding, rounded corners, and box shadows to create a consistent design system. As a bonus challenge, I implemented a featured project card using `grid-column: span 2`, allowing one initiative to occupy more space within the grid layout.

### What I Learned

* Understanding the difference between **CSS Grid** and **Flexbox** layouts.
* Creating two-dimensional layouts using `display: grid`.
* Using `grid-template-columns` to define structured column layouts.
* Understanding fractional units (`fr`) for flexible space distribution.
* Managing spacing between grid items using the `gap` property.
* Creating reusable card components for displaying projects and initiatives.
* Highlighting important content using `grid-column: span`.
* Building scalable layouts without relying on fixed pixel widths.

### Technologies Used
* HTML5
* CSS3
* CSS Grid
* CSS Fractional Units (`fr`)
* Responsive Layout Concepts

### Outcome

Successfully designed a structured **Initiatives Gallery** using CSS Grid with reusable project cards. The layout now provides a clean, organized way to showcase projects, hackathons, and open-source initiatives while improving my understanding of modern CSS layout systems and scalable web design practices.