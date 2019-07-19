# Using Assets

## File Format

Only use a `.png` file format in the registry

## Adding image to registry

Open `AssetRegisty.json` and under the `images` section, add the file name e.g. `donut.png` to the section (e.g. `donut`)

## Using an asset

Create a `<img>` tag, ang give it the attribute `asset` with the name of the asset.

When using an image import it into the registry, and then use it as an asset instead of using `src`. Using `src` will break when we webpack to compile.

### Example

```html
<img asset="donut" />
```

will automatically translate into

```html
<img src="donut.png">
```