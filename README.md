# ADHD Drug Treatment Study - Critical Appraisal Website

A comprehensive, interactive static website presenting a critical appraisal of the landmark BMJ study on ADHD drug treatment and its effects on suicidal behaviors, substance misuse, accidents, and criminality.

## 📄 Study Reference

**Zhang L, Zhu N, Sjölander A, et al.** ADHD drug treatment and risk of suicidal behaviours, substance misuse, accidental injuries, transport accidents, and criminality: emulation of target trials. *BMJ* 2025;390:e083658.

**DOI:** [http://dx.doi.org/10.1136/bmj-2024-083658](http://dx.doi.org/10.1136/bmj-2024-083658)

## 🌟 Features

### Content Sections
- **Study Overview**: Complete summary of study design, population, and objectives
- **Methods**: Detailed explanation of target trial emulation design and statistical approach
- **Results**: Comprehensive presentation of first and recurrent event outcomes
- **Critical Appraisal**: In-depth analysis of strengths, limitations, and quality assessment
- **Clinical Implications**: Practical implications for clinicians, researchers, policymakers, and patients

### Interactive Features
- ✅ Responsive design (desktop, tablet, mobile)
- ✅ Smooth scrolling navigation
- ✅ Active section highlighting in navbar
- ✅ Mobile-friendly hamburger menu
- ✅ "Scroll to top" button
- ✅ Copy-to-clipboard for tables
- ✅ Print/PDF export functionality
- ✅ Keyboard navigation (Alt + Arrow keys)
- ✅ Animated content on scroll
- ✅ Tooltips for abbreviations (hover over IRR, CI, RCT, etc.)

## 🚀 Quick Start

### Option 1: Open Directly in Browser
1. Simply open `index.html` in any modern web browser
2. No server or installation required!

### Option 2: Using a Local Server (Recommended)

#### Python
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Node.js
```bash
# Install http-server globally (one-time)
npm install -g http-server

# Run server
http-server -p 8000
```

#### PHP
```bash
php -S localhost:8000
```

Then open your browser to: `http://localhost:8000`

## 📁 File Structure

```
adhd-study-appraisal/
├── index.html          # Main HTML document
├── styles.css          # Complete styling and responsive design
├── script.js           # Interactive features and navigation
└── README.md          # This file
```

## 🎨 Design Features

### Color Scheme
- **Primary Blue**: Professional, trustworthy medical theme
- **Gradient Hero**: Eye-catching purple gradient background
- **Success Green**: Highlighting positive findings
- **Warning Amber**: Marking limitations and cautions

### Typography
- **Font**: Inter (modern, highly readable sans-serif)
- **Hierarchy**: Clear visual hierarchy with 4 heading levels
- **Line Height**: Optimized 1.6 for comfortable reading

### Layout
- **Container**: Max-width 1200px for optimal reading
- **Grid System**: Responsive 2-column layouts
- **Cards**: Elevated card design with shadows
- **Tables**: Professional, sortable data presentation

## 📱 Responsive Breakpoints

- **Desktop**: > 768px (full navigation, grid layouts)
- **Mobile/Tablet**: ≤ 768px (hamburger menu, stacked layouts)

## ⌨️ Keyboard Shortcuts

- `Alt + ↓`: Navigate to next section
- `Alt + ↑`: Navigate to previous section
- `Esc`: Close mobile menu

## 🖨️ Printing

The website includes print-optimized styles:
- Click "🖨️ Print / Save as PDF" button in hero section
- Or use your browser's print function (`Ctrl+P` / `Cmd+P`)
- Navigation and footer are hidden in print view
- Clean, professional layout for PDF export

## 📊 Study Highlights

### Key Findings
- **148,581 participants** with ADHD from Swedish national registers
- **2-year follow-up** period (2007-2020)
- **5 critical outcomes** examined
- **Target trial emulation** design for enhanced causal inference

### Main Results
- ✅ **17% reduction** in suicidal behaviours (IRR 0.83)
- ✅ **15% reduction** in substance misuse (IRR 0.85)
- ✅ **12% reduction** in transport accidents (IRR 0.88)
- ✅ **13% reduction** in criminality (IRR 0.87)
- ⚠️ **No significant effect** on first accidental injuries (IRR 0.98)

### Recurrent Events
- Even stronger effects for repeated outcomes
- Up to **25% reduction** for substance misuse and criminality
- Statistically significant for all five outcomes

## 🎯 Target Audience

- **Clinicians**: Evidence for treatment decisions
- **Researchers**: Methodological insights and future directions
- **Medical Students**: Critical appraisal education
- **Policymakers**: Public health implications
- **Patients & Families**: Understanding treatment benefits and risks

## 🔧 Customization

### Changing Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2563eb;
    --success-color: #059669;
    --warning-color: #d97706;
    /* ... more variables */
}
```

### Adding Sections
1. Add section in `index.html`
2. Add navigation link in navbar
3. JavaScript will automatically handle smooth scrolling and highlighting

## 🌐 Browser Compatibility

Tested and working on:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📚 Educational Use

This website is designed for:
- Critical appraisal teaching sessions
- Journal club presentations
- Evidence-based medicine courses
- Clinical research methodology training
- Healthcare professional education

## 🔗 External Resources

The footer includes links to:
- Original BMJ article
- Study protocol on Open Science Framework
- NICE ADHD Guidelines

## 💡 Tips for Best Experience

1. **Use a modern browser** for best performance
2. **Enable JavaScript** for interactive features
3. **View on desktop** for optimal table viewing
4. **Print to PDF** to save a copy for offline reference
5. **Hover over abbreviations** to see full terms

## 📄 License

This critical appraisal website is created for educational purposes. The original study is published in BMJ and subject to their copyright terms.

## 🤝 Contributing

This is an educational resource. Feel free to:
- Fork and customize for your own teaching
- Adapt the template for other study appraisals
- Share with colleagues and students

## ⚠️ Disclaimer

This website presents a critical appraisal for educational purposes. It should not replace reading the original research article or substitute for professional medical advice.

## 📧 Questions or Feedback?

This website template can be adapted for appraising other research studies. The structure follows best practices for critical appraisal presentation.

---

## 🎓 About Critical Appraisal

Critical appraisal is the systematic evaluation of research evidence to assess:
- **Validity**: Are the results valid?
- **Reliability**: Can we trust the findings?
- **Applicability**: Can we apply these results to our patients/population?

This website presents all three dimensions for the Zhang et al. BMJ 2025 study.

---

**Version**: 1.0  
**Last Updated**: 2025  
**Template**: Research Critical Appraisal Website

Made with ❤️ for evidence-based practice
