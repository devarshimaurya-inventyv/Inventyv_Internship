import { Component, signal, ViewChild, QueryList, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterOutlet } from '@angular/router';

class DirNode {
  name: string;
  parent: DirNode | null;
  children: Map<String, DirNode>;

  constructor(name: string, parent: DirNode | null = null) {
    this.name = name;
    this.parent = parent;
    this.children = new Map();
  }  
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl:'./app.html',
  styleUrls: ['./app.css']
})

  


export class App {
  logs = signal<string[]>([]);
  pwd = signal<string>('');

  root = new DirNode('');
  current: DirNode;

  @ViewChild('cmdInput') input!: ElementRef;

  constructor() {
    const home = new DirNode('home', this.root);
    this.root.children.set('home', home);

    const user = new DirNode('user', home);
    home.children.set('user', user);

    this.current = user;
    this.updatePwd();
  }

  func(cmd: string) {
  this.addLog(`${this.pwd()} : ${cmd}`);
    const args = cmd.trim().split(/\s+/);
    if (!args[0]) return;
    switch (args[0]) {
      case 'pwd':
        this.addLog(this.pwd());
        break;

      case 'ls':
        this.addLog(
          Array.from(this.current.children.keys()).join('  ') || ''
        );
        break;

      case 'mkdir':
        if (args[1]) this.mkdir(args[1]);
        break;

      case 'cd':
        if (args[1]) this.cd(args[1]);
        break;
        
        case 'clear':
          this.logs.set([]);
          break;
      default:
        if (args[0] === 'ng' && args[1] === 'build') {
        this.addLog('Building Angular project...');
        break ;
        }
        if (args[0] === 'ng' && args[1] === 'serve') {
        this.addLog('Serving Angular project...');
        break ;
        }
        if (args[0] === 'ng' && args[1] === 'new' && args[2]) {
        this.addLog('Created  Angular project...');
        this.mkdir(args[2]);
        break ;
        }
        if (args[0] === 'ng' && args[1] === 'test') {
        this.addLog('Testing  Angular project...');
       
        break ;
        }
        if (args[0] === 'ng' && args[1] === 'e2e' ) {
        this.addLog('e2e  Angular project...');
   
        break ;
        }
        if (args[0] === 'ng' && (args[1] === 'global' || args[1]=='g') &&  (args[2] === 'Component' || args[2]=='c') && (args[3])) {
        this.addLog('Created  Angular Component...');
        this.mkdir(args[3]);
        break ;
        }
       
        this.addLog('unknown command');
    }

  }

  mkdir(name: string) {
    if (!this.current.children.has(name)) {
      const dir = new DirNode(name, this.current);
      this.current.children.set(name, dir);
    }
    else{
      this.addLog('already  exist');
    }
  }

  getPwd(node: DirNode): string {
    const parts: string[] = [];

    while (node && node.name !== '') {
      parts.push(node.name);
      node = node.parent!;
    }

    return '/' + parts.reverse().join('/');
  }

  cd(name: string) {
    if (name === '..') {
      if (this.current.parent) {
        this.current = this.current.parent;
      }
    } else {
      const next = this.current.children.get(name);
      if (next) this.current = next;
      else this.addLog('folder not found');
    }

    this.updatePwd();
  }

  updatePwd() {
    let node: DirNode | null = this.current;
    const parts: string[] = [];

    while (node && node.name !== '') {
      parts.push(node.name);
      node = node.parent;
    }

    this.pwd.set('/' + parts.reverse().join('/'));
  }

  addLog(text: string) {
    this.logs.update(l => [...l, text]);
  }

    focusInput() {
      this.input?.nativeElement.focus();
    }
}

