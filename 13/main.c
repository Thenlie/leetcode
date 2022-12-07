int get_value(char c) {
    switch (c) {
        case 73: // I
            return 1;
        case 86: // V
            return 5;
        case 88: // X
            return 10;
        case 76: // L
            return 50;
        case 67: // C
            return 100;
        case 68: // D
            return 500;
        case 77: // M
            return 1000;
    }
    return 0;
}

int get_difference(char prev, char cur) { 
    if (prev == 73) {
        if (cur == 86 || cur == 88) return 2;
    } else if (prev == 88) {
        if (cur == 76 || cur == 67) return 20;
    } else {
        if (cur == 68 || cur == 77) return 200;
    }
    return 0;
}

int romanToInt(char * s){
    int answer = 0;

    for (int i = 0; s[i]; i++) {
        int diff = 0;
        int val = get_value(s[i]);
        // check numeral infront of current
        if (i > 0) {
            if (s[i-1] == 73 || s[i-1] == 88 || s[i-1] == 67) {
                diff = get_difference(s[i-1], s[i]);
            }
        } 
        answer += (val - diff);
    }
    
    return answer;
}
