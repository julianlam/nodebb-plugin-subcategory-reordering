# Subcategory Reordering for NodeBB

In a nutshell, this plugin allows you to enable automatic reordering by post date for specific categories' subcategories.

For example, if Category `A` has three subcategories, `B`, `C`, and `D`, and automatic re-ordering was enabled for
`A`, then any post in `B`, `C`, or `D` will change their ordering when seen via `A`, by bumping that category to the top.

So when originally the order was `B`, `C`, `D`, a new topic or reply in `D` will trigger re-ordering, and the new order
would be `D`, `B`, `C`.

## Installation

Install via the admin control panel, and restart NodeBB. In the plugin settings, enable automatic re-ordering for
whichever categories you like. The ordering itself applies only to the *subcategories* of the enabled category.