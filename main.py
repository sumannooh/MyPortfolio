from kivy.uix.gridlayout import GridLayout
from kivy.app import App
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.image import Image
from kivy.uix.label import Label
from kivy.uix.button import Button

contacts = GridLayout(cols=2, spacing=10, size_hint=(1, 0.3))

btn1 = Button(text="📱 WhatsApp")
btn2 = Button(text="📧 Email")
btn3 = Button(text="🌐 GitHub")
btn4 = Button(text="💼 Projects")

contacts.add_widget(btn1)
contacts.add_widget(btn2)
contacts.add_widget(btn3)
contacts.add_widget(btn4)

class PortfolioApp(App):
    def build(self):
        layout = BoxLayout(orientation="vertical", padding=20, spacing=20)

        photo = Image(source="profile.jpg", size_hint=(1, 0.4))
        title = Label(text="Welcome Suman!", font_size=30)
        about = Label(text="I am learning Python, HTML, CSS and Kivy.", font_size=18)
        button = Button(text="My Goal", size_hint=(1, 0.2))

        def show_goal(instance):
            about.text = "🎯 My Goal: Become a Software Developer"

        button.bind(on_press=show_goal)

        layout.add_widget(photo)
        layout.add_widget(title)
        layout.add_widget(about)
        layout.add_widget(button)
        layout.add_widget(contacts)
        return layout

PortfolioApp().run()
