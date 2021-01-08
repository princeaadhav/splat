def splat():
    score = 0
    while input.button_is_pressed(Button.A) == False:
        chance = randint(1, 5)
        if chance >= 1 and chance <= 2:
            basic.show_icon(IconNames.BUTTERFLY)
            if input.light_level() <= 5:
                score = score - 5
                basic.show_icon(IconNames.GHOST)
                continue
            elif input.light_level() > 5:
                continue
        elif chance >= 3 and chance <= 5:
            basic.show_icon(IconNames.MEH)
            if input.light_level() <= 5:
                score = score + 5
                basic.show_icon(IconNames.SILLY)
                continue
            elif input.light_level() > 5:
                continue
    basic.show_number(score)
splat()
while True:
    if input.button_is_pressed(Button.B):
        splat()