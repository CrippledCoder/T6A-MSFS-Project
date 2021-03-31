ORGMAP = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],[0, 4, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 4, 0],[0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],[0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0],[0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0],[0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],[2, 2, 2, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 2, 2, 2],[0, 0, 0, 0, 1, 0, 1, 0, 0, 3, 0, 0, 1, 0, 1, 0, 0, 0, 0],[2, 2, 2, 2, 1, 1, 1, 0, 3, 3, 3, 0, 1, 1, 1, 2, 2, 2, 2],[0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],[2, 2, 2, 0, 1, 0, 1, 1, 1, 2, 1, 1, 1, 0, 1, 0, 2, 2, 2],[0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],[0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],[0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],[0, 4, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 4, 0],[0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0],[0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0],[0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
WALLS = [
	[{"move": [0, 9.5]}, {"line": [3, 9.5]},{"curve": [3.5, 9.5, 3.5, 9]}, {"line": [3.5, 8]},{"curve": [3.5, 7.5, 3, 7.5]}, {"line": [1, 7.5]},{"curve": [0.5, 7.5, 0.5, 7]}, {"line": [0.5, 1]},{"curve": [0.5, 0.5, 1, 0.5]}, {"line": [9, 0.5]},{"curve": [9.5, 0.5, 9.5, 1]}, {"line": [9.5, 3.5]}],
	[{"move": [9.5, 1]},{"curve": [9.5, 0.5, 10, 0.5]}, {"line": [18, 0.5]},{"curve": [18.5, 0.5, 18.5, 1]}, {"line": [18.5, 7]},{"curve": [18.5, 7.5, 18, 7.5]}, {"line": [16, 7.5]},{"curve": [15.5, 7.5, 15.5, 8]}, {"line": [15.5, 9]},{"curve": [15.5, 9.5, 16, 9.5]}, {"line": [19, 9.5]}],
	[{"move": [2.5, 5.5]}, {"line": [3.5, 5.5]}],
	[{"move": [3, 2.5]},{"curve": [3.5, 2.5, 3.5, 3]},{"curve": [3.5, 3.5, 3, 3.5]},{"curve": [2.5, 3.5, 2.5, 3]},{"curve": [2.5, 2.5, 3, 2.5]}],
	[{"move": [15.5, 5.5]}, {"line": [16.5, 5.5]}],
	[{"move": [16, 2.5]}, {"curve": [16.5, 2.5, 16.5, 3]},{"curve": [16.5, 3.5, 16, 3.5]}, {"curve": [15.5, 3.5, 15.5, 3]},{"curve": [15.5, 2.5, 16, 2.5]}],
	[{"move": [6, 2.5]}, {"line": [7, 2.5]}, {"curve": [7.5, 2.5, 7.5, 3]},{"curve": [7.5, 3.5, 7, 3.5]}, {"line": [6, 3.5]},{"curve": [5.5, 3.5, 5.5, 3]}, {"curve": [5.5, 2.5, 6, 2.5]}],
	[{"move": [12, 2.5]}, {"line": [13, 2.5]}, {"curve": [13.5, 2.5, 13.5, 3]},{"curve": [13.5, 3.5, 13, 3.5]}, {"line": [12, 3.5]},{"curve": [11.5, 3.5, 11.5, 3]}, {"curve": [11.5, 2.5, 12, 2.5]}],
	[{"move": [7.5, 5.5]}, {"line": [9, 5.5]}, {"curve": [9.5, 5.5, 9.5, 6]},{"line": [9.5, 7.5]}],
	[{"move": [9.5, 6]}, {"curve": [9.5, 5.5, 10.5, 5.5]},{"line": [11.5, 5.5]}],
	[{"move": [5.5, 5.5]}, {"line": [5.5, 7]}, {"curve": [5.5, 7.5, 6, 7.5]},{"line": [7.5, 7.5]}],
	[{"move": [6, 7.5]}, {"curve": [5.5, 7.5, 5.5, 8]}, {"line": [5.5, 9.5]}],
	[{"move": [13.5, 5.5]}, {"line": [13.5, 7]},{"curve": [13.5, 7.5, 13, 7.5]}, {"line": [11.5, 7.5]}],
	[{"move": [13, 7.5]}, {"curve": [13.5, 7.5, 13.5, 8]},{"line": [13.5, 9.5]}],
	[{"move": [0, 11.5]}, {"line": [3, 11.5]}, {"curve": [3.5, 11.5, 3.5, 12]},{"line": [3.5, 13]}, {"curve": [3.5, 13.5, 3, 13.5]}, {"line": [1, 13.5]},{"curve": [0.5, 13.5, 0.5, 14]}, {"line": [0.5, 17]},{"curve": [0.5, 17.5, 1, 17.5]}, {"line": [1.5, 17.5]}],
	[{"move": [1, 17.5]}, {"curve": [0.5, 17.5, 0.5, 18]}, {"line": [0.5, 21]},{"curve": [0.5, 21.5, 1, 21.5]}, {"line": [18, 21.5]},{"curve": [18.5, 21.5, 18.5, 21]}, {"line": [18.5, 18]},{"curve": [18.5, 17.5, 18, 17.5]}, {"line": [17.5, 17.5]}],
	[{"move": [18, 17.5]}, {"curve": [18.5, 17.5, 18.5, 17]},{"line": [18.5, 14]}, {"curve": [18.5, 13.5, 18, 13.5]},{"line": [16, 13.5]}, {"curve": [15.5, 13.5, 15.5, 13]},{"line": [15.5, 12]}, {"curve": [15.5, 11.5, 16, 11.5]},{"line": [19, 11.5]}],
	[{"move": [5.5, 11.5]}, {"line": [5.5, 13.5]}],
	[{"move": [13.5, 11.5]}, {"line": [13.5, 13.5]}],
	[{"move": [2.5, 15.5]}, {"line": [3, 15.5]},{"curve": [3.5, 15.5, 3.5, 16]}, {"line": [3.5, 17.5]}],
	[{"move": [16.5, 15.5]}, {"line": [16, 15.5]},{"curve": [15.5, 15.5, 15.5, 16]}, {"line": [15.5, 17.5]}],
	[{"move": [5.5, 15.5]}, {"line": [7.5, 15.5]}],
	[{"move": [11.5, 15.5]}, {"line": [13.5, 15.5]}],
	[{"move": [2.5, 19.5]}, {"line": [5, 19.5]},{"curve": [5.5, 19.5, 5.5, 19]}, {"line": [5.5, 17.5]}],
	[{"move": [5.5, 19]}, {"curve": [5.5, 19.5, 6, 19.5]},{"line": [7.5, 19.5]}],
	[{"move": [11.5, 19.5]}, {"line": [13, 19.5]},{"curve": [13.5, 19.5, 13.5, 19]}, {"line": [13.5, 17.5]}],
	[{"move": [13.5, 19]}, {"curve": [13.5, 19.5, 14, 19.5]},{"line": [16.5, 19.5]}],
	[{"move": [7.5, 13.5]}, {"line": [9, 13.5]},{"curve": [9.5, 13.5, 9.5, 14]}, {"line": [9.5, 15.5]}],
	[{"move": [9.5, 14]}, {"curve": [9.5, 13.5, 10, 13.5]},{"line": [11.5, 13.5]}],
	[{"move": [7.5, 17.5]}, {"line": [9, 17.5]},{"curve": [9.5, 17.5, 9.5, 18]}, {"line": [9.5, 19.5]}],
	[{"move": [9.5, 18]}, {"curve": [9.5, 17.5, 10, 17.5]},{"line": [11.5, 17.5]}],
	[{"move": [8.5, 9.5]}, {"line": [8, 9.5]}, {"curve": [7.5, 9.5, 7.5, 10]},{"line": [7.5, 11]}, {"curve": [7.5, 11.5, 8, 11.5]},{"line": [11, 11.5]}, {"curve": [11.5, 11.5, 11.5, 11]},{"line": [11.5, 10]}, {"curve": [11.5, 9.5, 11, 9.5]},{"line": [10.5, 9.5]}]
];

initialized = false;
ctx = 0;
tick = 0;
FPS = 25; 

dirs = ["-","D","L","U","-","","","","","","","R"];
NONE        = 4,
UP          = 3,
LEFT        = 2,
DOWN        = 1,
RIGHT       = 11,
WAITING     = 5,
PAUSE       = 6,
PLAYING     = 7,
COUNTDOWN   = 8,
EATEN_PAUSE = 9,
DYING       = 10;

/*************************************************************************************/
Map_blockSize = 30;
function Map_reset() {       
	var len = ORGMAP.length;
	map = new Array(len); 
	for (var i = 0; i<len; ++i) {map[i] = ORGMAP[i].slice(0)};
    Map_height = map.length;
    Map_width  = map[0].length;        
	initialized = true;
};
function Map_drawWalls() {
	ctx.strokeStyle = "#0000FF";
	ctx.lineWidth   = 10;
	ctx.lineCap     = "round";
	
	for (var i = 0; i < WALLS.length; i += 1) {
		var line = WALLS[i];
		ctx.beginPath();
		for (var j = 0; j < line.length; j += 1) {
			var p = line[j];
			if (p.move) {
				ctx.moveTo(p.move[0] * Map_blockSize, p.move[1] * Map_blockSize);
			} else if (p.line) {
				ctx.lineTo(p.line[0] * Map_blockSize, p.line[1] * Map_blockSize);
			} else if (p.curve) {
				ctx.quadraticCurveTo(p.curve[0] * Map_blockSize, p.curve[1] * Map_blockSize, p.curve[2] * Map_blockSize,  p.curve[3] * Map_blockSize);   
			}
		}
		ctx.stroke();
	};
};
function Map_drawBlock(j, i) {
    var layout = map[j][i];
    if (layout === Game_PILL) {return};
    ctx.beginPath();
    if (layout === Game_EMPTY || layout === Game_BLOCK || layout === Game_BISCUIT) {
        ctx.fillStyle = "#000";
	    ctx.fillRect((i * Map_blockSize), (j * Map_blockSize), Map_blockSize, Map_blockSize);
        if (layout === Game_BISCUIT) {
            ctx.fillStyle = "#FFF";
	        ctx.fillRect((i * Map_blockSize) + (Map_blockSize / 2.5), (j * Map_blockSize) + (Map_blockSize / 2.5), Map_blockSize / 6, Map_blockSize / 6);
        }
    }
    ctx.closePath();	 
};
function Map_draw() {
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, Map_width * Map_blockSize, Map_height * Map_blockSize);
    for (var i = 0; i < Map_height; i += 1) {
	    for (var j = 0; j < Map_width; j += 1) {
		    Map_drawBlock(i, j);
	    }
    }
};   
function Map_drawPills() { 
	pillSize+=5;
    if (pillSize > 45) {pillSize = 0}
    for (var i = 0; i < Map_height; i += 1) {
	    for (var j = 0; j < Map_width; j += 1) {
            if (map[i][j] === Game_PILL) {
                ctx.beginPath();
                ctx.fillStyle = "#000";
	            ctx.fillRect((j * Map_blockSize), (i * Map_blockSize), Map_blockSize, Map_blockSize);
                ctx.fillStyle = "#FFF";
                ctx.arc((j * Map_blockSize) + Map_blockSize / 2, (i * Map_blockSize) + Map_blockSize / 2, Math.abs(5 - (pillSize/3)), 0, Math.PI * 2, false); 
                ctx.fill();
                ctx.closePath();
            }
	    }
    }
};
function Map_isFloorSpace(pos) {
    if (!Map_withinBounds(pos.y, pos.x)) {return false}
    var piece = map[pos.y][pos.x];
    return piece === Game_EMPTY || piece === Game_BISCUIT || piece === Game_PILL;
}
function Map_withinBounds(y, x) {
    return y >= 0 && y < Map_height && x >= 0 && x < Map_width;
}
function Map_isWallSpace(pos) {
    return Map_withinBounds(pos.y, pos.x) && map[pos.y][pos.x] === Game_WALL;
}
function Map_withinBounds(y, x) {
    return y >= 0 && y < Map_height && x >= 0 && x < Map_width;
}
function Map_block(pos) {return map[pos.y][pos.x]};
function Map_setBlock(pos, type) {map[pos.y][pos.x] = type};

/*************************************************************************************/
User_position  = null,
User_direction = null,
User_eaten     = null,
User_due       = null, 
User_lives     = null,
User_score     = 0;

function User_addScore(nScore) { 
    User_score += nScore;
    if (User_score >= 10000 && User_score - nScore < 10000) {User_lives += 1}
};

function User_theScore() {return User_score;};
function User_initUser() {
    User_score = 0;
    User_lives = 2;
	User_lastDir = 2;
    User_newLevel();
}
function User_newLevel() {
    User_resetPosition();
    User_eaten = 0;
};
function User_resetPosition() {
    User_position = {"x": 90, "y": 120};
    User_direction = LEFT;
    User_due = LEFT;
};
function User_reset() {
    User_initUser();
    User_resetPosition();
};        
function User_getNewCoord(dir, current) {   
    return {
        "x": current.x + (dir === LEFT && -2 || dir === RIGHT && 2 || 0),
        "y": current.y + (dir === DOWN && 2 || dir === UP    && -2 || 0)
    };
};
function User_onWholeSquare(x) {return x % 10 === 0};
function User_pointToCoord(x) {return Math.round(x/10)};
function User_nextSquare(x, dir) {
    var rem = x % 10;
    if (rem === 0) { 
        return x; 
    } else if (dir === RIGHT || dir === DOWN) { 
        return x + (10 - rem);
    } else {
        return x - rem;
    }
};
function User_next(pos, dir) {
    return {
        "y" : User_pointToCoord(User_nextSquare(pos.y, dir)),
        "x" : User_pointToCoord(User_nextSquare(pos.x, dir)),
    };                               
};
function User_onGridSquare(pos) {
    return User_onWholeSquare(pos.y) && User_onWholeSquare(pos.x);
};
function User_isOnSamePlane(due, dir) { 
    return ((due === LEFT || due === RIGHT) && 
            (dir === LEFT || dir === RIGHT)) || 
        ((due === UP || due === DOWN) && 
         (dir === UP || dir === DOWN));
};
function User_move() {
    var npos = null, nextWhole = null, oldPosition = User_position, block = null;
    
    if (User_due !== User_direction) {
        npos = User_getNewCoord(User_due, User_position);
        if (User_isOnSamePlane(User_due, User_direction) || 
            (User_onGridSquare(User_position) && 
            Map_isFloorSpace(User_next(npos, User_due)))) {
            User_direction = User_due;
        } else {
            npos = null;
        }
    }
    if (npos === null) {npos = User_getNewCoord(User_direction, User_position)}
    if (User_onGridSquare(User_position) && Map_isWallSpace(User_next(npos, User_direction))) {
        User_direction = NONE;
    }
    if (User_direction === NONE) {
        return {"new" : User_position, "old" : User_position};
    }
    if (npos.y === 100 && npos.x >= 190 && User_direction === RIGHT) {
        npos = {"y": 100, "x": -10};
    }
    if (npos.y === 100 && npos.x <= -12 && User_direction === LEFT) {
        npos = {"y": 100, "x": 190};
    }
    User_position = npos;        
    nextWhole = User_next(User_position, User_direction);
    block = Map_block(nextWhole);        
    if ((User_isMidSquare(User_position.y) || User_isMidSquare(position.x)) && block === Game_BISCUIT || block === Game_PILL) {
        Map_setBlock(nextWhole, Game_EMPTY);           
        User_addScore((block === Game_BISCUIT) ? 10 : 50);
        User_eaten += 1;
        if (User_eaten === 182) {Game_completedLevel()}; 
        if (block === Game_PILL) {Game_eatenPill()}
    }   
	User_lastDir = User_direction;
    return {"new" : User_position, "old" : oldPosition}
};
function User_isMidSquare(x) { 
    var rem = x % 10;
    return rem > 3 || rem < 7;
};
function User_calcAngle(dir, pos) { 
	if (dir === NONE) {dir=User_lastDir};
    if (dir == RIGHT && (pos.x % 10 < 5)) {
        return {"start":0.25, "end":1.75, "direction": false};
    } else if (dir === DOWN && (pos.y % 10 < 5)) { 
        return {"start":0.75, "end":2.25, "direction": false};
    } else if (dir === UP && (pos.y % 10 < 5)) { 
        return {"start":1.25, "end":1.75, "direction": true};
    } else if (dir === LEFT && (pos.x % 10 < 5)) {             
        return {"start":0.75, "end":1.25, "direction": true};
    }
    return {"start":0, "end":2, "direction": false};
};
function User_drawDead(amount) { 
    var size = Map_blockSize, half = size / 2;
    if (amount < -2.5) {return}
    ctx.fillStyle = "#FFFF00";
    ctx.beginPath();        
    ctx.moveTo(((User_position.x/10) * size) + half, 
               ((User_position.y/10) * size) + half);
    ctx.arc(((User_position.x/10) * size) + half, 
            ((User_position.y/10) * size) + half,
            half, -2.3+amount, -.8-amount, true); 
    ctx.fill();    
};
function User_draw() { 
    var s = Map_blockSize, angle = User_calcAngle(User_direction, User_position);
    ctx.fillStyle = "#FFFF00";
    ctx.beginPath();        
    ctx.moveTo(((User_position.x/10) * s) + s / 2,
               ((User_position.y/10) * s) + s / 2);
    ctx.arc(((User_position.x/10) * s) + s / 2,
            ((User_position.y/10) * s) + s / 2,
            s / 2, Math.PI * angle.start, 
            Math.PI * angle.end, angle.direction); 
    ctx.fill();    
};

/*************************************************************************************/
function Ghost_draw(ghost) {
	var gametick = ghost[1], x = ghost[2].x, y = ghost[2].y, direction = ghost[4], eatable = ghost[6], eaten = ghost[7];
	if (direction==NONE) {return {"eatable":eatable, "eaten":eaten}};
    var s=Map_blockSize, top  = (y/10) * s, left = (x/10) * s;
    if (eatable && Ghost_secondsAgo(eatable) > 6) {eatable = null}
    if (eaten && Ghost_secondsAgo(eaten) > 2) {eaten = null}
    var tl = left + s;
    var base = top + s - 3;
    var inc = s / 10;
    var high = tick % 10 > 5 ? 3  : -3;
    var low  = tick % 10 > 5 ? -3 : 3;
    ctx.fillStyle = Ghost_getColour(ghost);
    ctx.beginPath();
    ctx.moveTo(left, base);
    ctx.quadraticCurveTo(left, top, left + (s/2),  top);
    ctx.quadraticCurveTo(left + s, top, left+s,  base);
    ctx.quadraticCurveTo(tl-(inc*1), base+high, tl - (inc * 2),  base);
    ctx.quadraticCurveTo(tl-(inc*3), base+low, tl - (inc * 4),  base);
    ctx.quadraticCurveTo(tl-(inc*5), base+high, tl - (inc * 6),  base);
    ctx.quadraticCurveTo(tl-(inc*7), base+low, tl - (inc * 8),  base); 
    ctx.quadraticCurveTo(tl-(inc*9), base+high, tl - (inc * 10), base); 
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = "#FFF";
    ctx.arc(left + 6,top + 6, s / 6, 0, 300, false);
    ctx.arc((left + s) - 6,top + 6, s / 6, 0, 300, false);
    ctx.closePath();
    ctx.fill();
    var f = s / 12;
    var off = {};
    off[RIGHT] = [f, 0];
    off[LEFT]  = [-f, 0];
    off[UP]    = [0, -f];
    off[DOWN]  = [0, f];
    ctx.beginPath();
    ctx.fillStyle = "#000";
    ctx.arc(left+6+off[direction][0], top+6+off[direction][1], s / 15, 0, 300, false);
    ctx.arc((left+s)-6+off[direction][0], top+6+off[direction][1], s / 15, 0, 300, false);
    ctx.closePath();
    ctx.fill();
    return {"eatable":eatable, "eaten":eaten};
};
function Ghost_getColour(ghost) { 
	var tick=ghost[1], eatable=ghost[6], eaten=ghost[7];
    if (eatable) { 
        if (Ghost_secondsAgo(eatable) > 5) { 
            return tick % 20 > 10 ? "#FFFFFF" : "#0000BB";
        } else { 
            return "#0000BB";
        }
    } else if(eaten) { 
        return "#222";
    } 
    return ghost[3];
};
function Ghost_reset(i) {
	//      0	  1	   2		3	  4		    5   6       7
	//     [index,tick,position,color,direction,due,eatable,eaten]
	return [i,tick,{"x":90,"y":80},Game_ghostSpecs[i],Ghost_getRandomDirection(),Ghost_getRandomDirection(),null,null]
};
function Ghosts_resetAll() {
	ghosts = [];
	for (var i = 0, len = Game_ghostSpecs.length; i < len; i += 1) {
		var ghost = Ghost_reset(i); 
		ghosts.push(ghost);
    };
}	
function Ghost_hide() {
	for (i=0; i<ghosts.length; i++) {
		var ghost = [i,tick,{"x":90,"y":100},Game_ghostSpecs[i],4,4,null,null];
		ghosts[i] = ghost;
	};
};
function Ghost_secondsAgo(check) {return (tick-check) / FPS}; 
function Ghost_move(ghost) {
	var index = ghost[0], position = ghost[2], direction = ghost[4], due = ghost[5];
	if (direction==NONE) {return {"new":position, "old":position, "dir":direction, "due":due}};
    var oldPos = position, onGrid = Ghost_onGridSquare(position), npos = null;
    if (due !== direction) {
        npos = Ghost_getNewCoord(due, position, ghost);
        if (onGrid && Map_isFloorSpace({
                "y":Ghost_pointToCoord(Ghost_nextSquare(npos.y, due)),
                "x":Ghost_pointToCoord(Ghost_nextSquare(npos.x, due))})) {
            direction = due;
			ghost[4] = due;
        } else {
            npos = null;
        }
    };
    if (npos === null) {npos = Ghost_getNewCoord(direction, position, ghost)};
    if (onGrid && Map_isWallSpace({
            "y" : Ghost_pointToCoord(Ghost_nextSquare(npos.y, direction)),
            "x" : Ghost_pointToCoord(Ghost_nextSquare(npos.x, direction))
        })) {
        ghost[5] = Ghost_getRandomDirection(direction);            
        return Ghost_move(ghost);
    };
    position = npos;        
    var tmp = Ghost_pane(position,direction);
    if (tmp) {position = tmp};
    due = Ghost_getRandomDirection(direction);
    return {"new" : position, "old" : oldPos, "dir" : direction, "due" : due};
};
function Ghost_onGridSquare(pos) {return Ghost_onWholeSquare(pos.y) && Ghost_onWholeSquare(pos.x)};
function Ghost_getNewCoord(dir, current, ghost) { 
    var speed  = Ghost_isVulnerable(ghost) ? 1 : Ghost_isHidden(ghost) ? 4 : 3,
        xSpeed = (dir === LEFT && -speed || dir === RIGHT && speed || 0),
        ySpeed = (dir === DOWN && speed || dir === UP && -speed || 0);
    return {"x": Ghost_addBounded(current.x, xSpeed), "y": Ghost_addBounded(current.y, ySpeed)};
};
function Ghost_getRandomDirection(direction) {
    var moves = (direction === LEFT || direction === RIGHT) ? [UP, DOWN] : [LEFT, RIGHT];
    return moves[Math.floor(Math.random() * 2)];
};
function Ghost_isVulnerable(ghost) {return ghost[6] !== null};
function Ghost_isDangerous(ghost) {return ghost[7] === null};
function Ghost_isHidden(ghost) {return ghost[6] === null && ghost[7] !== null};
function Ghost_addBounded(x1, x2) { 
    var rem = x1 % 10, result = rem + x2;
    if (rem !== 0 && result > 10) {
        return x1 + (10 - rem);
    } else if(rem > 0 && result < 0) { 
        return x1 - rem;
    }
    return x1 + x2;
};
function Ghost_onWholeSquare(x) {return x % 10 === 0};
function Ghost_pointToCoord(x) {return Math.round(x / 10)};
function Ghost_nextSquare(x, dir) {
    var rem = x % 10;
    if (rem === 0) { 
        return x; 
    } else if (dir === RIGHT || dir === DOWN) { 
        return x + (10 - rem);
    } else {
        return x - rem;
    }
};
function Ghost_pane(pos,direction) {
    if (pos.y === 100 && pos.x >= 190 && direction === RIGHT) {
        return {"y": 100, "x": -10};
    }
    if (pos.y === 100 && pos.x <= -10 && direction === LEFT) {
        return {"y": 100, "x": 190};
    }
    return false;
};
function Ghost_oppositeDirection(dir) { 
    return dir === LEFT && RIGHT || dir === RIGHT && LEFT || dir === UP && DOWN || UP;
};

/*********************************************************************************/
function Game_drawScore(text, position) {
    ctx.fillStyle = "#FFFFFF";
    ctx.font      = "12px Cartoon";
    ctx.fillText(text, (position["new"]["x"] / 10) * Map_blockSize, ((position["new"]["y"] + 5) / 10) * Map_blockSize);
}
function Game_startLevel() {        
    User_resetPosition();
    for (var i = 0; i < ghosts.length; i += 1) { 
        ghosts[i] = Ghost_reset(i);
    }
    Game_timerStart = tick;
    Game_setState(PLAYING);
}    
function Game_startNewGame() {
    Game_setState(WAITING);
    Game_level = 1;
    for (var i = 0; i < ghosts.length; i += 1) { 
        ghosts[i] = Ghost_reset(i);
    }
    User_reset();
    Map_reset();
    Map_draw();
    Game_timerStart = tick;
}
function Game_drawFooter() {
    var topLeft  = (Map_height * Map_blockSize), textBase = topLeft + 27;
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, topLeft, (Map_width * Map_blockSize), 30);
    ctx.fillStyle = "#FFFF00";
    for (var i = 0, len = User_lives; i < len; i++) {
        ctx.fillStyle = "#FFFF00";
        ctx.beginPath();
        ctx.moveTo(235 + (25 * i) + Map_blockSize / 2, (topLeft+2) + Map_blockSize / 2);
        ctx.arc(235 + (25 * i) + Map_blockSize / 2, (topLeft+2) + Map_blockSize / 2, Map_blockSize / 2, Math.PI * 0.25, Math.PI * 1.75, false);
        ctx.fill();
    }
    ctx.fillStyle = "#FFFF00";
    ctx.font      = "24px Cartoon";
    ctx.fillText("Score: " + User_score, 28, textBase);
    ctx.fillText("Level: " + Game_level, 424, textBase);
}
function Game_redrawBlock(pos) {
	if (pos.x>0) {
		Map_drawBlock(Math.floor(pos.y/10), Math.floor(pos.x/10), ctx);
		Map_drawBlock(Math.ceil(pos.y/10), Math.ceil(pos.x/10), ctx);
	}
}
function Game_eatenPill() {
    Game_timerStart = tick;
    Game_eatenCount = 0;
    for (i = 0; i < ghosts.length; i += 1) {
		ghosts[i][4] = Ghost_oppositeDirection(ghosts[i][4]);
		ghosts[i][6] = tick;
    }        
};
function Game_completedLevel() {
    Game_setState(WAITING);
    Game_level += 1;
    Map_reset();
    User_newLevel();
    Game_startLevel();
};
function Game_loseLife() {        
    Game_setState(PLAYING);
    User_lives--;
    if (User_lives > 0) {
        Game_startLevel();
    } else {
		Game_startNewGame();
	};
	dieanim = 1;
}
function Game_setState(nState) { 
    Game_state = nState;
    Game_stateChanged = true;
};
function Game_collided(user, ghost) {
    return (Math.sqrt(Math.pow(ghost.x - user.x, 2) + Math.pow(ghost.y - user.y, 2))) < 10;
};
function Game_dialog(text) {
    ctx.font      = "36px Cartoon";
    var width = ctx.measureText(text).width, x = ((Map_width * Map_blockSize) - width) / 2, y = (Map_height * 10) + 110;        
	ctx.fillStyle = "black";
	ctx.fillRect(x, y-36, width, 40);
    ctx.fillStyle = "#FFFF00";
    ctx.fillText(text, x, y);
}

function mainDraw(move) {
	var user, i, len;
	if (move) {
		dialog = "", ghostPos = [];
		for (i = 0, len = ghosts.length; i < len; i += 1) {
			var ghost = ghosts[i];
			ghostPos.push(Ghost_move(ghost));
			ghost[2] = ghostPos[i].new;
			ghost[4] = ghostPos[i].dir;
			ghost[5] = ghostPos[i].due;
			ghosts[i] = ghost;
		}
		user = User_move();
		for (i = 0, len = ghosts.length; i < len; i += 1) {
			Game_redrawBlock(ghostPos[i].old);
		}
		Game_redrawBlock(user.old);
	};
	var ghostStatus = [];
	for (i = 0, len = ghosts.length; i < len; i += 1) {
		var ghost = ghosts[i];
		ghostStatus.push(Ghost_draw(ghost));
		ghost[6] = ghostStatus[i].eatable;
		ghost[7] = ghostStatus[i].eaten;
		ghosts[i] = ghost;
	}  
	User_draw();
	if (dialog!="") {Game_dialog(dialog)};
}
function getInputs() {
	var input = SimVar.GetSimVarValue("AILERON LEFT DEFLECTION PCT", "percent");
	if (input<-10) {
		User_due = LEFT;
	} else if (input>10) {
		User_due = RIGHT;
	};
	input = SimVar.GetSimVarValue("ELEVATOR DEFLECTION PCT", "percent");
	if (input<-10) {
		User_due = UP;
	} else if (input>10) {
		User_due = DOWN;
	};
}	
/*********************************************************************************/
Game_WALL    = 0;
Game_BISCUIT = 1;
Game_EMPTY   = 2;
Game_BLOCK   = 3;
Game_PILL    = 4;

Game_state        = COUNTDOWN,
Game_audio        = null,
Game_ghostSpecs   = ["#00FFDE", "#FF0000", "#FFB8DE", "#FFB847"],
Game_eatenCount   = 0,
Game_level        = 0,
Game_stateChanged = true,
Game_timerStart   = null,
Game_lastTime     = 0,
Game_timer        = null,
Game_stored       = null;

pillSize = 0;
map = 0;

ghosts = [];

dialog="";
ghostPos = [];
dieanim = 1;
timer = 0;
move = true;

/*********************************************************************************/

class PACMANFS extends BaseInstrument {
    constructor() {
        super();	
    }		
    get templateID() { return "PACMANFS" }
	
    connectedCallback() {
        super.connectedCallback();
        this.main = this.getChildById("Mainframe");
        this.wrapper = this.getChildById("pacman");

        this._redrawSVG();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
    }
    Init() {
        super.Init();
		//if (g_modDebugMgr) {g_modDebugMgr.AddConsole(null)}; // if (g_modDebugMgr) {g_modDebugMgr.AddConsole(null)};if (g_modDebugMgr) {g_modDebugMgr.AddConsole(null)};if (g_modDebugMgr) {g_modDebugMgr.AddConsole(null)};if (g_modDebugMgr) {g_modDebugMgr.AddConsole(null)};if (g_modDebugMgr) {g_modDebugMgr.AddConsole(null)};if (g_modDebugMgr) {g_modDebugMgr.AddConsole(null)};if (g_modDebugMgr) {g_modDebugMgr.AddConsole(null)};if (g_modDebugMgr) {g_modDebugMgr.AddConsole(null)};if (g_modDebugMgr) {g_modDebugMgr.AddConsole(null)};if (g_modDebugMgr) {g_modDebugMgr.AddConsole(null)};if (g_modDebugMgr) {g_modDebugMgr.AddConsole(null)};if (g_modDebugMgr) {g_modDebugMgr.AddConsole(null)};if (g_modDebugMgr) {g_modDebugMgr.AddConsole(null)};if (g_modDebugMgr) {g_modDebugMgr.AddConsole(null)};if (g_modDebugMgr) {g_modDebugMgr.AddConsole(null)};if (g_modDebugMgr) {g_modDebugMgr.AddConsole(null)};if (g_modDebugMgr) {g_modDebugMgr.AddConsole(null)};if (g_modDebugMgr) {g_modDebugMgr.AddConsole(null)};if (g_modDebugMgr) {g_modDebugMgr.AddConsole(null)};if (g_modDebugMgr) {g_modDebugMgr.AddConsole(null)};if (g_modDebugMgr) {g_modDebugMgr.AddConsole(null)};if (g_modDebugMgr) {g_modDebugMgr.AddConsole(null)};if (g_modDebugMgr) {g_modDebugMgr.AddConsole(null)};if (g_modDebugMgr) {g_modDebugMgr.AddConsole(null)};if (g_modDebugMgr) {g_modDebugMgr.AddConsole(null)};if (g_modDebugMgr) {g_modDebugMgr.AddConsole(null)};if (g_modDebugMgr) {g_modDebugMgr.AddConsole(null)};if (g_modDebugMgr) {g_modDebugMgr.AddConsole(null)};if (g_modDebugMgr) {g_modDebugMgr.AddConsole(null)};if (g_modDebugMgr) {g_modDebugMgr.AddConsole(null)};
		Ghosts_resetAll();
		User_reset();
		Map_reset();
    }
	
    Update() {
		super.Update();
		if (this.CanUpdate()) {
			if (this.updateElectricity()) {
				getInputs();
				tick++;
				var i,len;
				if ((tick%1==0) && (initialized)) {
					this._redrawSVG();
					mainDraw((Game_state === PLAYING));
					if (Game_state === PLAYING) {
						for (i = 0, len = ghosts.length; i < len; i += 1) {
							if (Game_collided(User_position, ghostPos[i]["new"])) {
								if (Ghost_isVulnerable(ghosts[i])) { 
									ghosts[i][6] = null;
									ghosts[i][7] = tick;
									Game_eatenCount += 1;
									var nScore = Game_eatenCount * 50;
									Game_drawScore(nScore.toString(), ghostPos[i]);
									User_addScore(nScore);                    
									Game_setState(EATEN_PAUSE);
									Game_timerStart = tick;
								} else if (Ghost_isDangerous(ghosts[i])) {
									Game_setState(DYING);
									Game_timerStart = tick;
								}
							}
						}	
					} else if (Game_state === WAITING && Game_stateChanged) {            
						Game_startNewGame();
						Game_setState(COUNTDOWN);
					} else if (Game_state === EATEN_PAUSE && (tick - Game_timerStart) > (FPS / 3)) {
						Game_setState(PLAYING);
					} else if (Game_state === DYING) {
						if (dieanim<0) {
							if (tick - Game_timerStart > (FPS * 2)) { 
								Game_loseLife();
							} else { 
								Game_redrawBlock(User_position);
								Ghost_hide();
								User_drawDead(dieanim);
							}			
						}
						dieanim -= 0.1;
					} else if (Game_state === COUNTDOWN) {
						timer = 5 + Math.floor((Game_timerStart - tick) / FPS);
						if (timer === 0) {
							Game_setState(PLAYING);
						} else {
							if (timer !== Game_lastTime) { 
								Game_lastTime = timer;
								dialog = "Starting in: " + timer;
							}
						}
					}
					
				}
			}
		} 
	}

	_redrawSVG() {
        if (!this._canvasBase) {
			this._canvasBase = document.createElement("canvas"); 
			this.main.appendChild(this._canvasBase);
			this._canvasBase.style.display = "block";
			this._canvasBase.style.width = "45%";
			this._canvasBase.style.height = "90%";
			this._canvasBase.style.backgroundColor = "black";
            this._canvasBase.width = this.clientWidth;
            this._canvasBase.height = this.clientHeight;
            this._canvasBase.style.position = "absolute";
            this._canvasBase.style.top = "50px";
            this._canvasBase.style.left = "360px";
			this._canvasBaseContext = this._canvasBase.getContext("2d");
			ctx = this._canvasBaseContext;
		}
        this._canvasBaseContext.clearRect(0, 0, this._canvasBase.width, this._canvasBase.height);

		Map_draw();
		Map_drawWalls();
		Map_drawPills();
		Game_drawFooter();
	}	
}
registerInstrument("pacmanfs-element", PACMANFS);
