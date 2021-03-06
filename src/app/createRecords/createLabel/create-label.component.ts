import {
  Component,
  OnChanges,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import {
  labelCreateFields,
  classificationList,
  Classification_name,
  Classification_number,
  Response
} from "../../data-model";
import { CreateRecordService } from "../../services/create-records.service";
import { GetRecordService } from "../../services/getRecord.service";
import { SearchService } from "../../services/search.service";
import { Observable } from "rxjs/Observable";
import {
  FormGroup,
  FormBuilder,
  Validators,
  ValidatorFn,
  AbstractControl
} from "@angular/forms";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { DatePipe } from "@angular/common";
import { KeycloakService } from "../../keycloak/keycloak.service";

declare var $: any;
@Component({
  selector: "add-label",
  templateUrl: "./create-label.component.html",
  styleUrls: ["./create-label.component.css"],
  providers: [CreateRecordService]
})
export class CreateLabelComponent implements OnChanges {
  date_input: any;
  isLoading: boolean = false;
  submitted: boolean = false;
  offset: number = 0;
  message: string = null;
  labelField: labelCreateFields;
  id: number;
  flag: number = null;
  requiredField: boolean = false;
  requiredFieldOther: boolean = false;

  requiredFieldAmountAsSold: boolean = false;
  requiredFieldUnitOfMeasure: boolean = false;

  requiredFieldAmountAsPrepared: boolean = false;
  requiredFieldUnitOfMeasureAsPrepared: boolean = false;
  username: string;
  listOfClass: classificationList[];
  listOfUnitOfMeasure: string[];
  serverDown: boolean = false;
  labelForm: FormGroup;
  @Output()
  updateView = new EventEmitter<number>();

  constructor(
    private fb: FormBuilder,
    private createRecordService: CreateRecordService,
    private searchService: SearchService,
    private getRecordService: GetRecordService,
    private router: Router,
    private route: ActivatedRoute,
    private keycloakService: KeycloakService
  ) {
    this.createForm();
    this.username = KeycloakService.getUsername();
  }
  ngOnInit() {
    this.searchService
      .getClassificationAndUnitofMeasure()
      .subscribe(response => {
        const { data, message, status } = response[0];
        const { dataList } = response[1];

        this.listOfClass = data.dataList;

        this.listOfUnitOfMeasure = dataList;
      });
  }
  catch(error) {}

  ngOnChanges() {
    this.flag = null;
    this.submitted = false;

    this.labelForm.reset({
      package_description: this.labelField.package_description,
      package_upc: this.labelField.package_upc,
      package_brand: this.labelField.package_brand,
      package_manufacturer: this.labelField.package_manufacturer,
      package_country: this.labelField.package_country,
      package_size: this.labelField.package_size,
      package_size_unit_of_measure: this.labelField
        .package_size_unit_of_measure,
      storage_type: this.labelField.storage_type,
      storage_statements: this.labelField.storage_statements,
      health_claims: this.labelField.health_claims,
      other_package_statements: this.labelField.other_package_statements,
      suggested_directions: this.labelField.suggested_directions,
      ingredients: this.labelField.ingredients,
      multi_part_flag: this.labelField.multi_part_flag,
      nutrition_fact_table: this.labelField.nutrition_fact_table,
      as_prepared_per_serving_amount: this.labelField
        .as_prepared_per_serving_amount,
      as_prepared_unit_of_measure: this.labelField.as_prepared_unit_of_measure,
      as_sold_per_serving_amount: this.labelField.as_sold_per_serving_amount,
      as_sold_unit_of_measure: this.labelField.as_sold_unit_of_measure,
      as_prepared_per_serving_amount_in_grams: this.labelField
        .as_prepared_per_serving_amount_in_grams,
      as_sold_per_serving_amount_in_grams: this.labelField
        .as_sold_per_serving_amount_in_grams,
      package_comment: this.labelField.package_comment,
      package_source: this.labelField.package_source,
      package_product_description: this.labelField.package_product_description,
      package_collection_date: this.labelField.package_collection_date,
      number_of_units: this.labelField.number_of_units,
      informed_dining_program: this.labelField.informed_dining_program,
      nft_last_update_date: this.labelField.nft_last_update_date,
      product_grouping: this.labelField.product_grouping,
      child_item: this.labelField.child_item,
      classification_number: this.labelField.classification_number,
      classification_name: this.labelField.classification_name,
      nielsen_item_rank: this.labelField.nielsen_item_rank,
      nutrient_claims: this.labelField.nutrient_claims,
      package_nielsen_category: this.labelField.package_nielsen_category,
      common_household_measure: this.labelField.common_household_measure,
      calculated: this.labelField.calculated
    });
  }

  createForm() {
    this.labelForm = this.fb.group({
      package_description: [
        "",
        [Validators.required, Validators.pattern("\\s*\\S.*")]
      ],
      package_upc: [
        "",
        [Validators.pattern("^[0-9]+([,.][0-9]+)?$"), Validators.required]
      ],
      package_brand: "",
      package_manufacturer: "",
      package_country: "",
      package_size: [null, [Validators.pattern("^[0-9]+([,.][0-9]+)?$")]],
      package_size_unit_of_measure: "",
      storage_type: "",
      storage_statements: "",
      health_claims: "",
      other_package_statements: "",
      suggested_directions: "",
      ingredients: "",
      multi_part_flag: "false",
      nutrition_fact_table: "",
      as_prepared_per_serving_amount: [
        null,
        [Validators.pattern("^[0-9]+([,.][0-9]+)?$")]
      ],
      as_prepared_unit_of_measure: "",
      as_sold_per_serving_amount: [
        null,
        [Validators.pattern("^[0-9]+([,.][0-9]+)?$")]
      ],
      as_sold_unit_of_measure: "",
      as_prepared_per_serving_amount_in_grams: [
        null,
        [Validators.pattern("^[0-9]+([,.][0-9]+)?$")]
      ],
      as_sold_per_serving_amount_in_grams: [
        null,
        [Validators.pattern("^[0-9]+([,.][0-9]+)?$")]
      ],
      package_comment: "",
      package_source: [
        "",
        [Validators.required, Validators.pattern("\\s*\\S.*")]
      ],
      package_product_description: "",
      package_collection_date: ["", [Validators.required]],
      number_of_units: [null, [Validators.pattern("\\d+")]],
      informed_dining_program: "",
      nft_last_update_date: "",
      product_grouping: [null, [Validators.pattern("^[0-9]+([,.][0-9]+)?$")]],
      child_item: "",
      classification_number: "",
      classification_name: "",
      nielsen_item_rank: ["", [Validators.pattern("\\d+")]],
      nutrient_claims: "",
      package_nielsen_category: "",
      common_household_measure: "",
      calculated: ""
    });

    this.labelForm.valueChanges.subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.labelForm) {
      return;
    }
    const form = this.labelForm;

    for (const field in this.formErrors) {
      this.formErrors[field] = "";
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + " ";
        }
      }
    }
  }
  onSubmit() {
    this.flag = null;
    this.setValues();

    this.isLoading = true;

    this.createRecordService
      .createLabel(JSON.stringify(this.labelField))
      .finally(() => (this.isLoading = false))
      .subscribe(
        response => {
          const { message, status } = response;

          if (status === 202) {
            this.flag = 2;

            this.submitted = false;
          } else if (status === 203) {
            this.flag = 2;
            this.submitted = false;
          } else if (status === 204) {
            this.flag = 2;

            this.submitted = false;
          } else if (status === 200) {
            this.flag = 1;
            setTimeout(() => {
              this.router.navigate(["/viewproduct", this.id]);
            }, 4000);
          } else if (status === 604) {
            this.flag = 2;
            this.message = "UPC code belong to a diffent product";
            this.submitted = false;
          } else if (status === 803) {
            this.flag = 2;
            this.message = "Missing mandatory field(s)";
            this.submitted = false;
          } else {
            this.flag = 2;
            this.message = "Something went wrong, try again...";
            this.submitted = false;
          }
        },
        error => {
          this.serverDown = true;
          this.flag = 2;
          this.submitted = false;
        }
      );
  }

  prepareSaveProduct(): labelCreateFields {
    return this.labelForm.value;
  }

  formErrors = {
    package_description: "",
    package_upc: "",
    as_prepared_per_serving_amount: "",
    as_sold_per_serving_amount: "",
    as_prepared_per_serving_amount_in_grams: "",
    as_sold_per_serving_amount_in_grams: "",
    number_of_units: "",
    product_grouping: "",
    nielsen_item_rank: "",
    package_source: "",
    package_collection_date: "",
    package_size: "",
    package_size_unit_of_measure: "",
    as_sold_unit_of_measure: "",
    as_prepared_unit_of_measure: ""
  };

  validationMessages = {
    package_description: {
      required: "Package description is required",
      pattern: "Description is required"
    },
    package_upc: {
      required: "Label is required",
      pattern: "Must be a number"
    },
    as_prepared_per_serving_amount_in_grams: {
      pattern: "Must be a number"
    },
    as_sold_per_serving_amount: {
      pattern: "Must be a number",
      required: "This field is required"
    },
    as_sold_per_serving_amount_in_grams: {
      pattern: "Must be a number"
    },
    number_of_units: {
      pattern: "Must be a number"
    },
    product_grouping: {
      pattern: "Must be a number"
    },
    nielsen_item_rank: {
      pattern: "Must be a number"
    },
    package_source: {
      required: "Source is required",
      pattern: "Source is required"
    },
    package_collection_date: {
      required: "Collection date is required"
    },
    package_size: {
      pattern: "Must be a number",
      required: "Net quantity is required"
    },
    as_prepared_per_serving_amount: {
      pattern: "Must be a number",
      required: "Per Serving Amount (As prepared) is required"
    },
    package_size_unit_of_measure: {
      required: "Net quantity unit of measure is required"
    },
    as_sold_unit_of_measure: {
      required: "Per Serving Unit of Measure (As sold) is required"
    },
    as_prepared_unit_of_measure: {
      required: "Per Serving Unit of Measure (As prepared) is required"
    }
  };
  setValues(): void {
    this.submitted = true;
    var date = new DatePipe("en-US");

    this.labelField = this.prepareSaveProduct();
    this.labelField.package_collection_date = this.labelField
      .package_collection_date
      ? date.transform(this.labelField.package_collection_date, "yyyy-MM-dd")
      : this.labelField.package_collection_date;
    this.labelField.nft_last_update_date = this.labelField.nft_last_update_date
      ? date.transform(this.labelField.nft_last_update_date, "yyyy-MM-dd")
      : this.labelField.nft_last_update_date;

    this.route.params.subscribe(params => {
      this.labelField.product_id = +params["id"];
      this.id = this.labelField.product_id;
    });

    this.labelField.multi_part_flag =
      this.labelField.multi_part_flag == ""
        ? null
        : this.labelField.multi_part_flag;
    this.labelField.as_prepared_per_serving_amount =
      this.labelField.as_prepared_per_serving_amount == ""
        ? null
        : this.labelField.as_prepared_per_serving_amount;
    this.labelField.as_sold_per_serving_amount =
      this.labelField.as_sold_per_serving_amount == ""
        ? null
        : this.labelField.as_sold_per_serving_amount;
    this.labelField.as_prepared_per_serving_amount_in_grams =
      this.labelField.as_prepared_per_serving_amount_in_grams == ""
        ? null
        : this.labelField.as_prepared_per_serving_amount_in_grams;
    this.labelField.as_sold_per_serving_amount_in_grams =
      this.labelField.as_sold_per_serving_amount_in_grams == ""
        ? null
        : this.labelField.as_sold_per_serving_amount_in_grams;
    this.labelField.number_of_units =
      this.labelField.number_of_units == ""
        ? null
        : this.labelField.number_of_units;
    this.labelField.informed_dining_program =
      this.labelField.informed_dining_program == ""
        ? null
        : this.labelField.informed_dining_program;
    this.labelField.product_grouping =
      this.labelField.product_grouping == ""
        ? null
        : this.labelField.product_grouping;
    this.labelField.child_item =
      this.labelField.child_item == "" ? null : this.labelField.child_item;
    this.labelField.calculated =
      this.labelField.calculated == "" ? null : this.labelField.calculated;
    this.labelField.nielsen_item_rank =
      this.labelField.nielsen_item_rank == ""
        ? null
        : this.labelField.nielsen_item_rank;
    this.labelField.package_size =
      this.labelField.package_size == "" ? null : this.labelField.package_size;
    this.labelField.edited_by = this.username;
  }

  setClassificationName(n: String) {
    if (n != null && n != "") {
      var index = this.listOfClass.findIndex(function(item, i) {
        return item.classification_name === n;
      });

      if (
        this.labelForm.controls["classification_number"].value !=
        this.listOfClass[index]["classification_number"]
      ) {
        this.labelForm.controls["classification_number"].patchValue(
          this.listOfClass[index]["classification_number"]
        );
      }
    } else {
      if (
        this.labelForm.controls["classification_name"].value != null &&
        this.labelForm.controls["classification_name"].value != ""
      ) {
        this.labelForm.controls["classification_number"].patchValue("");
      }
    }
  }

  callAlex(n: String) {
    if (n != null && n != "") {
      var index = this.listOfClass.findIndex(function(item, i) {
        return item.classification_number === n;
      });

      if (
        this.labelForm.controls["classification_name"].value !=
        this.listOfClass[index]["classification_name"]
      ) {
        this.labelForm.controls["classification_name"].patchValue(
          this.listOfClass[index]["classification_name"]
        );
      }
    } else {
      if (
        this.labelForm.controls["classification_number"].value != null &&
        this.labelForm.controls["classification_number"].value != ""
      ) {
        this.labelForm.controls["classification_name"].patchValue("");
      }
    }
  }

  validateNetQuantiy(value: any) {
    if (
      value != null &&
      value != "" &&
      (this.labelForm.get("package_size").value == "" ||
        this.labelForm.get("package_size").value == null)
    ) {
      this.requiredField = true;
      this.requiredFieldOther = false;
    } else if (
      (value == null || value == "") &&
      (this.labelForm.get("package_size").value != "" &&
        this.labelForm.get("package_size").value != null)
    ) {
      this.requiredField = false;
      this.requiredFieldOther = true;
    } else if (
      (value == null || value == "") &&
      (this.labelForm.get("package_size").value == "" ||
        this.labelForm.get("package_size").value == null)
    ) {
      this.requiredField = false;
      this.requiredFieldOther = false;
    } else {
      this.requiredField = true;
      this.requiredFieldOther = false;
    }
  }

  validateNetQuantiyOther(value: any) {
    if (
      value != null &&
      value != "" &&
      (this.labelForm.get("package_size_unit_of_measure").value == "" ||
        this.labelForm.get("package_size_unit_of_measure").value == null)
    ) {
      this.requiredField = false;
      this.requiredFieldOther = true;
    } else if (
      (value == null || value == "") &&
      (this.labelForm.get("package_size_unit_of_measure").value != "" &&
        this.labelForm.get("package_size_unit_of_measure").value != null)
    ) {
      this.requiredField = true;
      this.requiredFieldOther = false;
    } else if (
      (value == null || value == "") &&
      (this.labelForm.get("package_size_unit_of_measure").value == "" ||
        this.labelForm.get("package_size_unit_of_measure").value == null)
    ) {
      this.requiredField = false;
      this.requiredFieldOther = false;
    } else {
      this.requiredField = false;
      this.requiredFieldOther = true;
    }
  }

  validatePerServingAmountAsSold(value: any) {
    if (
      value != null &&
      value != "" &&
      (this.labelForm.get("as_sold_unit_of_measure").value == "" ||
        this.labelForm.get("as_sold_unit_of_measure").value == null)
    ) {
      this.requiredFieldAmountAsSold = false;
      this.requiredFieldUnitOfMeasure = true;
    } else if (
      (value == null || value == "") &&
      (this.labelForm.get("as_sold_unit_of_measure").value != "" &&
        this.labelForm.get("as_sold_unit_of_measure").value != null)
    ) {
      this.requiredFieldAmountAsSold = true;
      this.requiredFieldUnitOfMeasure = false;
    } else if (
      (value == null || value == "") &&
      (this.labelForm.get("as_sold_unit_of_measure").value == "" ||
        this.labelForm.get("as_sold_unit_of_measure").value == null)
    ) {
      this.requiredFieldAmountAsSold = false;
      this.requiredFieldUnitOfMeasure = false;
    } else {
      this.requiredFieldAmountAsSold = false;
      this.requiredFieldUnitOfMeasure = true;
    }
  }

  validateUnitOfMeasureAsSold(value: any) {
    if (
      value != null &&
      value != "" &&
      (this.labelForm.get("as_sold_per_serving_amount").value == "" ||
        this.labelForm.get("as_sold_per_serving_amount").value == null)
    ) {
      this.requiredFieldAmountAsSold = true;
      this.requiredFieldUnitOfMeasure = false;
    } else if (
      (value == null || value == "") &&
      (this.labelForm.get("as_sold_per_serving_amount").value != "" &&
        this.labelForm.get("as_sold_per_serving_amount").value != null)
    ) {
      this.requiredFieldAmountAsSold = false;
      this.requiredFieldUnitOfMeasure = true;
    } else if (
      (value == null || value == "") &&
      (this.labelForm.get("as_sold_per_serving_amount").value == "" ||
        this.labelForm.get("as_sold_per_serving_amount").value == null)
    ) {
      this.requiredFieldAmountAsSold = false;
      this.requiredFieldUnitOfMeasure = false;
    } else {
      this.requiredFieldAmountAsSold = true;
      this.requiredFieldUnitOfMeasure = false;
    }
  }

  validatePerServingAmountAsPrepared(value: any) {
    if (
      value != null &&
      value != "" &&
      (this.labelForm.get("as_prepared_unit_of_measure").value == "" ||
        this.labelForm.get("as_prepared_unit_of_measure").value == null)
    ) {
      this.requiredFieldAmountAsPrepared = false;
      this.requiredFieldUnitOfMeasureAsPrepared = true;
    } else if (
      (value == null || value == "") &&
      (this.labelForm.get("as_prepared_unit_of_measure").value != "" &&
        this.labelForm.get("as_prepared_unit_of_measure").value != null)
    ) {
      this.requiredFieldAmountAsPrepared = true;
      this.requiredFieldUnitOfMeasureAsPrepared = false;
    } else if (
      (value == null || value == "") &&
      (this.labelForm.get("as_prepared_unit_of_measure").value == "" ||
        this.labelForm.get("as_prepared_unit_of_measure").value == null)
    ) {
      this.requiredFieldAmountAsPrepared = false;
      this.requiredFieldUnitOfMeasureAsPrepared = false;
    } else {
      this.requiredFieldAmountAsPrepared = false;
      this.requiredFieldUnitOfMeasureAsPrepared = true;
    }
  }

  validateUnitOfMeasureAsPrepared(value: any) {
    if (
      value != null &&
      value != "" &&
      (this.labelForm.get("as_prepared_per_serving_amount").value == "" ||
        this.labelForm.get("as_prepared_per_serving_amount").value == null)
    ) {
      this.requiredFieldAmountAsPrepared = true;
      this.requiredFieldUnitOfMeasureAsPrepared = false;
    } else if (
      (value == null || value == "") &&
      (this.labelForm.get("as_prepared_per_serving_amount").value != "" &&
        this.labelForm.get("as_prepared_per_serving_amount").value != null)
    ) {
      this.requiredFieldAmountAsPrepared = false;
      this.requiredFieldUnitOfMeasureAsPrepared = true;
    } else if (
      (value == null || value == "") &&
      (this.labelForm.get("as_prepared_per_serving_amount").value == "" ||
        this.labelForm.get("as_prepared_per_serving_amount").value == null)
    ) {
      this.requiredFieldAmountAsPrepared = false;
      this.requiredFieldUnitOfMeasureAsPrepared = false;
    } else {
      this.requiredFieldAmountAsPrepared = true;
      this.requiredFieldUnitOfMeasureAsPrepared = false;
    }
  }
}
