# Dashboard
### A simple dashboard Hammer template

[Visit the project website](http://stephanecurzi.github.io/dashboard)

## Why
Dashboard is a simple way to build a page featuring all your favorite website. I grew tired of having a ton of bookmark and trying to keep them organized, I wanted a quick way to launch my favorite website/services but I never got around to build something that I would update frequently enough.

By using [Hammer For Mac](http://hammerformac.com), you can quickly build a dashboard with your favorite website links.

Dashboard is already configured to show 12 section with different grouping, social, portfolio, etc. and has multiple pre-configured links.

## Getting started
Download the template ZIP of get the Github files and install in [Hammer For Mac](http://hammerformac.com).

Create your project and modify the files in the **_user-defined** folder.

Deploy the resulting **build** folder.

You don’t have to know your way around [Hammer For Mac](http://hammerformac.com) but it helps with variables behaviour. I encourage you to go to the website and look around the [docs](http://hammerformac.com/docs/).

## Customize the dashboard
You shouldn’t have to edit any files outside the **_user-defined**  folder, it contain your menu, sections and link list. With this folder, you'll have everything to create your personalized dashboard.

**_user-info.html** contain the base variables for your dashboard.

- `$tilte`: name of the dashboard
- `$username`: base username used with preconfigured links
- `$section-(1 to 12)-name`: name for the 12 sections
- `$section-(1 to 12)-icon`: SVG icon for the 12 sections

**_user-menu.html** and **_user-sections.html** list your sections, simply remove the sections you dont want to appear on your dashboard or keep it as is for the 12 preconfigured sections. One file is for the menu and the other list the actual content of the page.

**_links-(1 to 12).html** are where you list your link using the simple variables and includes structure or by using one of the pre-configured link. For a regular link, you would write a `$link-href` and `$link-name`.

	<!-- $link-href flickr.com/myname --><!-- $link-name Flickr --><!-- @include _button -->

You can change the appearance of link buttons with the variable `$type` using either `important` or `normal`. Each section is configured to start with `important` buttons.

 A pre-configured link is even easier, simply use one of the available includes, ex: `<!-- @include _twitter -->`, the link will be filled with your username configured in the **_user-info.html** file.
 
## Available pre-configured links
- Flickr —  `http://flickr.com/photos/$username`
- Instagram —  `http://instagram.com/$username`
- Picasa —  `http://picasaweb.google.com/$username`
- Behance —  `http://www.behance.net/$username`
- Dribbble —  `http://dribbble.com/$username`
- Dunked —  `http://$username.dunked.com`
- About.me —  `http://about.me/$username`
- Flavor.me —  `http://flavors.me/$username`
- Vizify —  `https://www.vizify.com/$username`
- Zerply —  `http://zerply.com/$username`
- Alpha —  `http://alpha.app.net/$username`
- Discus —  `http://disqus.com/$username`
- Facebook —  `http://facebook.com/$username`
- LinkedIn —  `http://www.linkedin.com`
- Twitter —  `https://twitter.com/$username`
- Prevue —  `http://$username.prevue.it/`
- Medium —  `https://medium.com/@$username`
- Scriptogram —  `http://scriptogr.am/$username`
- Tumblr —  `http://$username.tumblr.com/`
- Gmail —  `https://mail.google.com/`
- Outlook mail —  `https://login.live.com/`
- Flipboard —  `https://flipboard.com/profile/$username`

## Gratuitous self promotion
You can follow me on [Twitter](http://twitter.com/stephanecurzi).

Read a little bit more about me at [stephanecurzi.me](http://www.stephanecurzi.me).

Check my other projects by going to [behance](http://be.net/stephanecurzi) or [dribble](http://dribbble.com/stephanecurzi).

Check my CSS framework [BaselineCSS](http://baselinecss.com).

Thanks.

