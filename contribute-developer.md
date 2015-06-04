# Contribute your developer listing

Adding a new developer listing requires the creation of markdown files and then creating a pull request. Create the markdown ".md" file in the `/developer_profiles` folder. Files must have YAML fields at the top of the file (as documented below)

Developers are only allowed to create and edit their own profiles

### Example Developer Listing

Create your listing as `[full-name].md` inside the `/developer_profiles` folder. Note that the file name is required to be your full name and is required to have hyphens for spaces (and not real spaces) and all lowercase letters. See our [real listings](https://github.com/bradwestfall/webdevphoenix/tree/master/developer_profiles) for examples.

Start the file with YAML variables. Note that the three hyphens are required and are used to enclose the YAML.

```
---
layout: dev_profile
developer_name: John Doe
link: http://example.com
co-founder-willing: true
linkedin: http://example.com
email: john[at]example.com
website: http://example.com
twitter: johndoeexample
github: johndoeexample
stack: [CSS, JavaScript]
---
```

### YAML Variables

> Note that quote marks for strings are optional in YAML but might be required for some values

#### layout
Must be "dev_profile"<br>
Required: Yes


#### developer_name
Required: Yes


#### link
The URL you want the browser to go to when your name is clicked
Required: Yes


#### co-founder-willing
Are you willing to entertain offers to be a co-founder<br>
Required: No


#### linkedin
The full URL of your linkin account<br>
Required: No

#### email
Your email address with `[at]` as your `@` sign. We will attempt to disguise your email a bit and only show it when a link is clicked<br>
Required: No

#### website
The full URL of your website<br>
Required: No


#### twitter
Your twitter handle. Note that this is without the `@` sign<br>
Required: No


#### GitHub
Your GitHub username (which we will use to create a URL)<br>
Required: No


#### stack
An array of languages, frameworks, libraries or other technologies you want to say you do. Arrays in YAML are formatted as follows:

```
stack: [JavaScript, Node]
```

Required: No
