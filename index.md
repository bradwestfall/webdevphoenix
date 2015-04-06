---
layout: default
---

<header class="content-header">
    <h1>Welcome</h1>
    <div class="actions">
        <a href="/add-company" class="button add-company">Add a company</a>
    </div>
</header>

## I need your help!

This site was launched on **Easter Sunday 2015**. It's an easy way to see how many companies in Phoenix hire for web dev. It doesn't matter if the companies are currently hiring or not. It's just a list of everyone who might.

Help me get it filled with companies this first week.

See the [Contribute Page](https://github.com/bradwestfall/webdevphoenix/blob/master/contribute.md)

## All companies

{% for page in site.pages %}{% if page.company %}
    {% include browse_companies.html %}
{% endif %}{% endfor %}
