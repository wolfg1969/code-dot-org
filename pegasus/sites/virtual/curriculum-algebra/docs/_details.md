<% anchor = DB[:cdo_standards].where(id_s:lesson[:anchor_s]).first %>

<% if !lesson[:overview_t].nil? %>
## Lesson Overview

<%= lesson[:overview_t] %>
<% end %>

<% if !lesson[:objectives_t].nil? %>
## Lesson Objectives 
### Students will:

<% lesson[:objectives_t].split(";").each do |objective| %>
- <%= objective %>
<% end %>

<% end %>

<% if !lesson[:anchor_s].nil? %>
<details>
<summary>Anchor Standard</summary>

### <%= anchor[:family_s] %>

- **<%= anchor[:id_s] %>**: <%= anchor[:desc_t] %>

_Additional standards alignment can be found at the end of this lesson_
</details>
<% end %>

<% if !lesson[:prereqs_t].nil? %>
<details>
<summary>Prerequisite Knowledge</summary>
### This lesson assumes that students can:

<% lesson[:prereqs_t].split(";").each do |prereq| %>
- <%= prereq %>
<% end %>

</details>
<% end %>