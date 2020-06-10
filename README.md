# aam_v2

aam_v2 is the successor of [Aam](https://github.com/JmPotato/Aam) which created by a more morden way with help of [Gatsby](https://www.gatsbyjs.org/).

## Usage

Make sure you have installed `yarn` and `gatsby-cli` first. You can check this [Quick Start Guide](https://www.gatsbyjs.org/docs/quick-start) as a reference.

```javascript
// gatsby-config.js
siteMetadata: {
    title: `All about me`, // Set your site name here
}
```

Create a index/home page by using `type: home` like this:

```markdown
---
title: "Hi! I'm Haizhi Geng, aka JmPotato, JmP0tato, JmPotat0 etc..."
date: "2020-06-10"
type: home
name: Home
---

## Hello

Nice to meet you :)
```

Similarly, to create a normal page which will show up on the navigaion bar, you should use `type: page`.

```markdown
---
title: "I'd love to talk! Find me by these ways"
date: "2020-06-10"
type: page
name: Contact
---

- GitHub: [@JmPotato](https://github.com/JmPotato)
- Twitter: [@Jm🥔](https://twitter.com/JmPotat0)
- Weibo: [@JmP0tato](http://weibo.com/potatobrother)
```

When you finished, use this command to build:

```shell
gatsby build
```
