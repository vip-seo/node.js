<?php


mysql_select_db ("vipmir_db");
mysql_query("SET NAMES utf8");
ini_set('max_execution_time', 900);
// Выводим таблицу результатов
echo "<table border=1 width=80% cellpadding=5 align=center>";
echo  "<caption>Таблица cклада магазина</caption>";
echo "<tr>";
//echo "<th>Артикул mirlodok</th>";
echo "<th>Артикул weekender</th>";
echo "<th>Название</th>";
echo "<th>Наличие на сайте</th>";
echo "</tr>";
// Двигаемся по каждой записи таблицы s_products
$weekender = mysql_query("SELECT * FROM weekender");
while ($week = mysql_fetch_assoc($weekender)) {
	$var = mysql_query("SELECT * FROM s_variants WHERE diler_id = 1");
		while ($v = mysql_fetch_assoc($var)) {
			if (strtolower(trim($week[artikul])) == strtolower(trim($v[sku]))) 
			{$rez = 1;
		echo "<td align=center>".$week[artikul]."</td>"; 
		echo "<td align=center>".$week[name]."</td>"; 
	echo "<td bgcolor=#4f836d align=center>В наличии</td></tr>";
	//	echo "<td align=center>".$v[sku]."</td>"; 
		}
				
		}
	if ($rez == 0) {
	echo "<td align=center>".$week[artikul]."</td>"; 
	echo "<td align=center>".$week[name]."</td>"; 
	echo "<td bgcolor=red align=center>Не добавлено</td></tr>";
	}
$rez = 0;
}
echo "</table>";  

mysql_close ($connect_mirlodok);

?> 


                                                         