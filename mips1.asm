 .data
	      message: .asciiz "\My name is Carlos Manuel Garc�a Escalante "
  .text
	      main:
              li $v0, 4
              la $a0, message
              syscall

              