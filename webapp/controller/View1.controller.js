sap.ui.define([
		"sap/ui/core/mvc/Controller"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller) {
		"use strict";

		return Controller.extend("ux.SecondProject.controller.View1", {
			onInit: function () {

            var sServiceUrl = "/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/";

		   	var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl);
		  	// @ts-ignore
              this.getView().setModel(oModel);
              

        // crm model
              var oCRMModel =  new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/Products?$format=json");
		 	 // @ts-ignore
              this.getView().byId("crmcontainer").setModel(oCRMModel,"oCRMModel");
              
// oCRMModel.attachRequestCompleted(
//                     function()
//                     {
                   
//                     	var str,substring="",odata,timevalue,status,system ="",qdepth="0", qdthold="0", apperror="0", appthold ="0",syserror="0",systhold="0";
                    	
                    	
//                     odata    =     this.getData();
//                     timevalue =    odata.d.RefreshFreq;  	
//                     status   =     odata.d.EvSuccess;
//                     system   =     odata.d.IvSystem;
                   
//                     qdepth   =  parseInt(odata.d.StockQuantity);
//                     qdthold  =  parseInt(odata.d.QdThreshold);
//                     apperror =  parseInt(odata.d.AppError);
// 				    appthold=   parseInt(odata.d.AeCThreshold);
// 				    syserror =  parseInt(odata.d.SysErr);
// 				    systhold =  parseInt(odata.d.SeCThreshold);
// 			var	    queueage =  odata.d.QueueAge;
// 			var	    threadage = odata.d.ThreadAge;
				   
                 
          	   
                 

				 
				    
                  
                    	
                    	
//                     });
		
		 	
                },

                onAfterRendering:function(){
                     // ecc model
              var oECCModel =  new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/Products?$format=json");
		 	 // @ts-ignore
              this.getView().byId("ecccontainer").setModel(oECCModel,"oECCModel");

               var oBWModel =  new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/Products?$format=json");
		 	 // @ts-ignore
              this.getView().byId("bwcontainer").setModel(oBWModel,"oBWModel");
                },

                 onBeforeRendering:function(){
                     // PLM model
              var oPLMModel =  new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/Products?$format=json");
		 	 // @ts-ignore
              this.getView().byId("plmcontainer").setModel(oPLMModel,"oPLMModel");
                 // java model
              var oJavaModel =  new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/Products?$format=json");
		 	 // @ts-ignore
              this.getView().byId("javacontainer").setModel(oJavaModel,"oJavaModel");
                 // Aws model
              var oAWSModel =  new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/Products?$format=json");
		 	 // @ts-ignore
              this.getView().byId("awscontainer").setModel(oAWSModel,"oAWSModel");
                
                },


            
            
		});
	});
