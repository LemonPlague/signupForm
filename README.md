# signupForm

The objective of this project is to utilize the knowledge I have gained about HTML forms.

[This is the assignment](https://i.ibb.co/qRKyLs7/sign-up-form.png)

# features

In order to stay true to the assignment, I did the best I could to create a 1:1 copy of the task we received. I intentionally avoided frameworks and preprocessors in favor doing all CSS by hand for base code learning purposes.

In doing so I structured the page as follows.
I have divided the page into two sections: left and right.
I divided the right side into 3 sections: top, middle, bottom.

The color pallette used was generally kept in order not to stray too far, aside from the left side image colors which were then used in places such as the button.

# form

The form itself here is the main point, as it requires removing default browser styles and adding our own. Some of the main points are the outline of the box when in `:focus`. 

The password boxes are the most feature-packed with javascript ensuring the two password input fields contain matching values. While they don't or while they are empty, the form submission button is disabled and discolored, the outline of the password input fields becomes red, and an error message is displayed on screen. 

While the password fields match, previous overwriting javascript styles are removed, the error message also removed, and the button is then enabled for form submission.