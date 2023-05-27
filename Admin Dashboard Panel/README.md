# Admin Dashboard Panel
<!-- https://admin-dashboard-panel-neon.vercel.app -->
This is a README file providing an overview of the code for an admin dashboard panel. The dashboard panel is designed using HTML CSS and JS. It consists of a navigation menu and a main content section.

# DEPLOYED VERSION 

<a href = "https://admin-dashboard-panel-neon.vercel.app" target = "_blank">Click here to checkout the deployed version of <b><u> Admin Dashboard Panel </b></u></a>


<b> LightMode : </b> 
<br>

<img src = assets/lightmode.jpg>

<br>

<b>Darkmode : </b> 
<br>

<img src = assets/darkmode.jpg>

## HTML Code  

The HTML code defines the structure and layout of the admin dashboard panel. It includes a navigation menu, a section for the dashboard content, and a link to an external JavaScript file for an admin dashboard with features related to user engagement and activity monitoring..

This HTML code represents an Admin Dashboard Panel for a website called "Hostel Lab." The dashboard consists of various elements and features to manage and monitor activities. The code includes navigation menus, a search box, user profile information, and sections for displaying data.

The navigation menu provides links to different sections such as "Dashboard," "Content," "Analytics," and social media-related options like "Like," "Comment," and "Share." The dashboard section includes an overview with boxes displaying statistics such as total likes, comments, and shares. Additionally, there is a "Recent Activity" section that lists names, email addresses, join dates, types (new or member), and statuses (liked, commented, or shared) of users.

```html
            <ul class="nav-links">
                <li><a href="#">
                    <i class="uil uil-estate"></i>
                    <span class="link-name">Dahsboard</span>
                </a></li>
                <li><a href="#">
                    <i class="uil uil-files-landscapes"></i>
                    <span class="link-name">Content</span>
                </a></li>
                <li><a href="#">
                    <i class="uil uil-chart"></i>
                    <span class="link-name">Analytics</span>
                </a></li>
                <li><a href="#">
                    <i class="uil uil-thumbs-up"></i>
                    <span class="link-name">Like</span>
                </a></li>
                <li><a href="#">
                    <i class="uil uil-comments"></i>
                    <span class="link-name">Comment</span>
                </a></li>
                <li><a href="#">
                    <i class="uil uil-share"></i>
                    <span class="link-name">Share</span>
                </a></li>
            </ul>
```

The code utilizes external CSS and JavaScript files for styling and functionality. The CSS file, referenced as "style.css," likely contains custom styles for the dashboard, while the JavaScript file, referenced as "script.js," is used for any dynamic behavior.


## CSS Code

The CSS code contains the styles and visual appearance for the admin dashboard panel. It defines various colors, fonts, transitions, and layouts used in the HTML code.

- Google Font Import : 
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}
```
- Dark Mode Styles : 
```css
body.dark{
    --primary-color: #3A3B3C;
    --panel-color: #242526;
    --text-color: #CCC;
    --black-light-color: #CCC;
    --border-color: #4D4C4C;
    --toggle-color: #FFF;
    --box1-color: #3A3B3C;
    --box2-color: #3A3B3C;
    --box3-color: #3A3B3C;
    --title-icon-color: #CCC;
}
```

- Custom Scrollbar Styles:
- 
    - The ::-webkit-scrollbar selector sets the width of the scrollbar.
     
     ```css
        /* === Custom Scroll Bar CSS === */
        ::-webkit-scrollbar {
            width: 8px;
        }
    ``` 
    - The ::-webkit-scrollbar-track selector defines the background color of the scrollbar track.
    ```css
    ::-webkit-scrollbar-track {
    background: #f1f1f1;
    }
    ```
    - The ::-webkit-scrollbar-thumb selector sets the background color and border radius of the scrollbar thumb.
    ```css
    ::-webkit-scrollbar-thumb {
    background: var(--primary-color);
    border-radius: 12px;
    transition: all 0.3s ease;
    }
    ```
    - The ::-webkit-scrollbar-thumb:hover selector changes the background color of the scrollbar thumb on hover.
    ```css
    ::-webkit-scrollbar-thumb:hover {
    background: #0b3cc1;
    }
    ```
    - he body.dark::-webkit-scrollbar-thumb:hover selector sets the background color of the scrollbar thumb in dark mode.
    ```css
    body.dark::-webkit-scrollbar-thumb:hover,
    body.dark .activity-data::-webkit-scrollbar-thumb:hover{
    background: #3A3B3C;
    }
    ```

- Navigation Styles : 
    - The nav selector sets the position, dimensions, padding, background color, and border for the navigation element.
    ```css
        nav{
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 250px;
        padding: 10px 14px;
        background-color: var(--panel-color);
        border-right: 1px solid var(--border-color);
        transition: var(--tran-05);
    }
    ```
    - The nav.close selector overrides the width and applies transition styles for closing the navigation.
    ```css
        
        nav.close{
            width: 73px;
        }
    ```

- Dashboard Styles :
    - The .dashboard selector sets the position, dimensions, background color, padding, and transition styles for the main content area of the dashboard.

    ```css
        .dashboard{
        position: relative;
        left: 250px;
        background-color: var(--panel-color);
        min-height: 100vh;
        width: calc(100% - 250px);
        padding: 10px 14px;
        transition: var(--tran-05);
        }
    ```
    - The .dashboard .top selector sets the position, dimensions, background color, padding, and transition styles for the top section of the dashboard.Styles for the sidebar toggle, search box, and user image are defined within the top section.
    ```css
        nav.close ~ .dashboard .top{
        left: 73px;
        width: calc(100% - 73px);
        }
        .dashboard .top .sidebar-toggle{
            font-size: 26px;
            color: var(--text-color);
            cursor: pointer;
        }
        .dashboard .top .search-box{
            position: relative;
            height: 45px;
            max-width: 600px;
            width: 100%;
            margin: 0 30px;
        }
    ```
- Media Queries : 
    - The code includes several media queries that adjust the layout for different screen sizes. These media queries modify the styles for the navigation, dashboard, and content sections based on the screen width.

    ```css
        @media (max-width: 780px) {
        .dash-content .boxes .box{
            width: calc(100% / 2 - 15px);
            margin-top: 15px;
        }
    }
         @media (max-width: 560px) {
        .dash-content .boxes .box{
            width: 100% ;
        }
    }
    ```

## JS Code 

The provided JavaScript code is responsible for adding functionality to a web page with a sidebar menu and a mode toggle button. This section of the code  selects HTML elements, checks the stored mode and status values, and toggles classes accordingly. It listens for clicks on mode and sidebar toggles, updating the classes and storing values in local storage for persistence

```javascript
    modeToggle.addEventListener("click", () =>{
        body.classList.toggle("dark");
        if(body.classList.contains("dark")){
            localStorage.setItem("mode", "dark");
        }else{
            localStorage.setItem("mode", "light");
        }
    });
```


## Features 

<ul>
    <li> The navigation menu includes a logo, menu items, and a logout mode. </li>
    <li> Each menu item has an icon and a corresponding link. </li>
    <li> The dashboard content section displays an overview and recent activity.</li>
    <li> The overview section shows statistics in separate boxes. </li>
    <li> The recent activity section displays information in multiple columns. </li>
</ul>

## Usage 

To use the admin dashboard panel : 
<ol>
    <li> Download the HTML, CSS, and JavaScript files. </li>
    <li> Place the files in the appropriate directory in your project. </li>
    <li> Customize the content and appearance of the dashboard as needed. </li>
    <li>  Link the CSS and JavaScript files to the HTML file. </li>
    <li> Open the HTML file in a web browser to view the admin dashboard panel. </li>
</ol>

## Dependencies 

The admin dashboard panel has the following dependencies :
<ul>
    <li> 
    <a href = "https://iconscout.com/unicons" > Line Icons </a> - The CSS file for Line Icons is loaded from a CDN
    </li>
</ul>

## Contributing

Contributions to this project are welcome. To contribute, follow these steps:

1. Fork the repository: `https://github.com/Lakshya-GG/Bootstrap-Websites.git`
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make changes and commit them: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Submit a pull request

## Credits

The admin dashboard panel is created by <a href = "https://github.com/Lakshya-GG"> Lakshya Singh </a> and is available on <a href = "https://github.com/Lakshya-GG/Bootstrap-Websites/tree/main/Admin%20Dashboard%20Panel">GitHub</a>

## License 

The admin dashboard panel is released under the [MIT License](https://opensource.org/license/mit/). Please see the [LICENSE.md](https://github.com/Lakshya-GG/TesseractJS/blob/main/LICENSE) file for more information.