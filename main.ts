function splat() {
    let chance: number;
    let score = 0
    while (input.logoIsPressed() == false) {
        chance = randint(1, 5)
        if (chance >= 1 && chance <= 2) {
            basic.showIcon(IconNames.Butterfly)
            if (input.lightLevel() <= 5) {
                score = score - 5
                basic.showIcon(IconNames.Ghost)
                continue
            } else if (input.lightLevel() > 5) {
                continue
            }
            
        } else if (chance >= 3 && chance <= 5) {
            basic.showIcon(IconNames.Meh)
            if (input.lightLevel() <= 5) {
                score = score + 5
                basic.showIcon(IconNames.Silly)
                continue
            } else if (input.lightLevel() > 5) {
                continue
            }
            
        }
        
    }
    basic.showNumber(score)
}

splat()
