import turtle

# Set up the screen
screen = turtle.Screen()
screen.bgcolor("white")

# Create a turtle object
heart = turtle.Turtle()
heart.color("red")
heart.pensize(3)
heart.speed(0)  # Set speed to the fastest

# Move the turtle to the starting position
heart.penup()
heart.goto(0, -200)
heart.pendown()

# Draw the heart shape
heart.begin_fill()
heart.left(140)
heart.forward(224)
for _ in range(200):
    heart.right(1)
    heart.forward(2)
heart.left(120)
for _ in range(200):
    heart.right(1)
    heart.forward(2)
heart.forward(224)
heart.end_fill()

# Hide the turtle
heart.hideturtle()

# Keep the window open
turtle.done()

# Hide the turtle
heart.hideturtle()

# Keep the window open
turtle.done()
