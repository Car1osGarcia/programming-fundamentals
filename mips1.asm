 .data
	      message: .asciiz "\My name is Carlos Manuel García Escalante "
  .text
	      main:
              li $v0, 4
              la $a0, message
              syscall

              