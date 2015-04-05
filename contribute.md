# Contribute Listings

Adding a new company listing requires the creation of markdown files and then creating a pull request



## Company Listings

Create a markdown ".md" file in the `/companies` folder. Files must have YAML fields at the top of the file. Below the YAML fields you can type up to 500 characters of plain-text content (for your profile content)

### YAML Fields

Below is an example of what YAML looks like with several fields:

```
---
layout: company_profile
company: "XYZ Company"
overview: "Web Development and Consulting"
company_size: "Small"
---
```

Note that the three hyphens are required and are used to enclose the YAML.

#### Required Fields

field|required|type|values
-----|--------|----|------
layout|yes||Must be exactly "company_profile"

