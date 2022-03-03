# Donation Form Block for WordPress by GiveWP 💚

A beautiful donation form block for Stripe by [GiveWP](https://givewp.com/). Accept donations in minutes.

---
## 🌱 Getting Started

Do you have a WordPress website? Great! You can use this block on your site. Simply log into your WP-Admin and go to Plugins > Add New.

Alternatively, when in the block editor open up the block editor and click the "Add Block" button. Once there, type "Donation" and you should see the block display in the list of available blocks. Simply hover over the block and click to install it and add the block to your page.

Looking to help the development? Great! Check out the development

### Customization Features

This block allows for extensive customization. You can change the main image, headings, description, and button text.

## 👩‍💻 Contribution Guide

This plugin uses wp-scripts under the hood to compile assets.

1. Clone the repository to your `wp-content/plugins` directory
2. Run `composer install` and `npm install`
3. Run `npm run start` to start the LiveReload feature

### 🐛 Bug Reporting

1. Open an issue on [GitHub](https://github.com/impress-org/donation-block-for-stripe/issues/new) 👆
2. Include the steps to reproduce the bug
3. Submit a PR if you have time 😀

### 📝 Development Notes

Let's take a look at the development notes.

**⚙️ Under the hood:**

1. React done the Gutenberg way
2. wp-scripts (create-block)
3. Composer and Strauss for the Stripe PHP SDK
4. Currency React component
5. Stripe JS for Payment Element
6. Lotties for animations
7. Aphrodite for CSS

### How do I style the block?

Our styles are meant to be as opinionated as possible. This is because we want the block to look consistent between themes. We have found, especially with forms, that themes often add their own styles to the form which makes it look not as polished as it should.

What's up with all the `!important` styles? Well, they're there to make sure the block looks great on all devices. Under the hood, the plugin is using [Aphrodite](https://github.com/Khan/aphrodite) to style the block.

Aphrodite is a CSS preprocessor that makes it easy to write CSS in JS. With WordPress, themes can really adjust the styles of the block in ways that don't really look great. That's why we're aggressively styling it using this tool.
