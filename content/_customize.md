## Customize the dashboard
You shouldn’t have to edit any files outside the **_user-defined**  folder, it contain your menu, sections and link list. With this folder, you'll have everything to create your personalized dashboard.

**_user-info.html** contain the base variables for your dashboard.

- `$tilte`: name of the dashboard
- `$username`: base username used with preconfigured links
- `$section-(1 to 12)-name`: name for the 12 sections
- `$section-(1 to 12)-icon`: SVG icon for the 12 sections

**_user-menu.html** and **_user-sections.html** list your sections, simply remove the sections you dont want to appear on your dashboard or keep it as is for the 12 preconfigured sections. One file is for the menu and the other list the actual content of the page.

**_links-(1 to 12).html** are where you list your link using the simple variables and includes structure or by using one of the pre-configured link. For a regular link, you would write a `$link-href` and `$link-name`.

	<!-- $link-href flickr.com/myname -->
	<!-- $link-name Flickr -->
	<!-- @include _button -->

You can change the appearance of link buttons with the variable `$type` using either `important` or `normal`. Each section is configured to start with `important` buttons.

 A pre-configured link is even easier, simply use one of the available includes, ex: `<!-- @include _twitter -->`, the link will be filled with your username configured in the **_user-info.html** file.